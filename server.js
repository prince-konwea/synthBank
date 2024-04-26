import express from "express"
import connectDB from "./config/database.js"
import routes from "./routes/index.js"
import {} from "dotenv/config"

import { errorHandler } from "./middleware/errorHandler.js"

const app = express()
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/v1", routes)
app.use(errorHandler);


app.get('/test', (req, res) => {
 return res.status(200).json({msg: "synth bank is the best"})
})

connectDB()

const port = process.env.PORT

app.listen(port, console.log(`server is listening on ${port}....`))