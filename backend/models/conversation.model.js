import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User" //shows that the id is from UserSchema
    }],
    messages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Message", //shows that the id is from MessageSchema
        default:[]
    }]
}, {timestamps: true});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;