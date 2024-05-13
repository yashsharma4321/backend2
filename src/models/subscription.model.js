

import mongoose ,{Schema} from "mongoose"
const subsciptionSchema = new Schema({
    subscriber:{
        type : Schema.Types.ObjectId,//one who is subscripting
        ref:"User"
        
    },
    channel:{
        type:Schema.Types.ObjectId,//one to whom 'subscriber is subscribing
        ref:"User"
    }
},{timestamps:true })
export const Subscription = mongoose.model("Subscription",subsciptionSchema)