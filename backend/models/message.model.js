import mongoose from "mongoose";

const messageShema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User", //shows that the id is from UserSchema
        require: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User", //shows that the id is from UserSchema
        require: true
    },
    message:{
        type: String,
        require: true
    }
    //craetedAT, updatedAT; mongoose automatecally will show the time
}, {timestamps: true});

const Message = mongoose.model("Message", messageShema);

export default Message;