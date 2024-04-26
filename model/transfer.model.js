import { Schema, model } from "mongoose";

const transferSchema = new Schema({
    fromUser: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
    toUser: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
    amount: { type: Schema.Types.Number, required: true },
    timestamp: { type: Schema.Types.Date, default: Date.now }
});

export default model('Transfer', transferSchema);
