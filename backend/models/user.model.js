import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
        minlenght: 6,
    },
    gender:{
        type:String,
        required: true,
        enum:["male", "female"],
    },
    profilePicture:{
        type:String,
        default:"",
    }

    //createdAt, updatedAT => Member since <createdAt>
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;