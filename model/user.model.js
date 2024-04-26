import {Schema, model} from "mongoose";

const userSchema = new Schema({
    userName: {type: Schema.Types.String},
    email: {type: Schema.Types.String},
    password: {type: Schema.Types.String},
    balance: { type: Schema.Types.Number, default: 1000 } 
})

export default model('User', userSchema)