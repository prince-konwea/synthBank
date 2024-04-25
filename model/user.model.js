import {Schema, model} from "mongoose";

const userSchema = new Schema({
    userName: {type: Schema.Types.String},
    email: {type: Schema.Types.String},
    password: {type: Schema.Types.String},
})

export default model('User', userSchema)