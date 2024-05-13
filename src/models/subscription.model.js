
import { subscribe } from "diagnostics_channel"
import mongoose ,{Schema} from "mongoose"
const subsciptionShema = new Schema({
    subscribe:{
        type : Schema.Types.ObjectId,//one who is subscripting
        ref:"User"
        
    },
    channel:{
        type:Schema.Types.ObjectId,//one to whom 'subscriber is subscribing
        ref:"User"
    }
},{timestamps:true })
export const subscription = mongoose.model("Subscription",subsciptionShema)