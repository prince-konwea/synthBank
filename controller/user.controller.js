import userModel from "../model/user.model.js";
import bcrypt  from "bcryptjs";
const userController = {
    async register(req, res){
      try{
        console.log(req.body)
        let {email, userName, password} = req.body;
        
        const existUser = await userModel.findOne({email});
        if(existUser){
            return res.status(400).json({error: 'User already exists'})
            
        }

        const hashedPassword = await bcrypt.hash(password, 10)
          const newUser = await userModel.create({
            userName,
            email,
            password
          })
          res.json(newUser)
      
      }catch(error){
         res.status(500).json({error: "Internal Server Error"})
      }
    },
    async login(){
     
    },
    async transfer(req, res){
        console.log(req.body)
    },
    async viewTransaction(req, res){
        console.log("transaction history")
    }
}


export default userController;