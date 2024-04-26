import userModel from "../model/user.model.js";
import transferModel from "../model/transfer.model.js";
import bcrypt  from "bcryptjs";



const userController = {
    async register(req, res) {
        try {
            const { email, userName, password } = req.body;
      
            const existUser = await userModel.findOne({ email });
            if (existUser) {
                return res.status(400).json({ error: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await userModel.create({
                userName,
                email,
                password: hashedPassword 
            });

            res.json(newUser);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;

         
            const user = await userModel.findOne({ email });

     
            if (!user) {
                return res.status(400).json({ error: 'User not found' });
            }

        
            const isPasswordValid = await bcrypt.compare(password, user.password);

      
            if (!isPasswordValid) {
                return res.status(400).json({ error: 'Invalid password' });
            }

        

            res.json({ message: 'Login successful' });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    async transfer(req, res) {
      try {
          const { fromUserId, toUserId, amount } = req.body;

        
          const fromUser = await userModel.findById(fromUserId);
          const toUser = await userModel.findById(toUserId);

          if (!fromUser || !toUser) {
              return res.status(400).json({ error: 'One or both users not found' });
          }

 
          if (fromUser.balance < amount) {
              return res.status(400).json({ error: 'Insufficient balance' });
          }

          fromUser.balance -= amount;
          await fromUser.save();

 
          toUser.balance += amount;
          await toUser.save();

          const transfer = await transferModel.create({
              fromUser: fromUserId,
              toUser: toUserId,
              amount: amount
          });

          res.json({ message: 'Transfer successful', transfer: transfer });
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
      }
  },

  

  async viewTransaction(req, res) {
    try {
        const { userId } = req.params;

   
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }


        const transactions = await transferModel.find({
            $or: [{ fromUser: userId }, { toUser: userId }]
        }).sort({ timestamp: -1 });

        res.json({ user: user, transactions: transactions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
},
}


export default userController;