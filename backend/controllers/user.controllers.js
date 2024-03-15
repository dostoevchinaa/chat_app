import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
    try {
        //current authorised user
        const loggedInUserId = req.user._id;
        //show every user insted authrised one in sidebar
        const filteredUseres = await User.find({_id: {$ne: loggedInUserId} }).select("-password");

        res.status(200).json(filteredUseres);
    } catch (error) {
        console.log("Error in getUserForSidebar: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}