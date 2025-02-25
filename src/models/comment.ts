import mongoose from "mongoose";  

const commentSchema = new mongoose.Schema({
    userName: {
        type: String,  
        required: true, 
        default: "anonymous" 
    },
    content: {
        type: String, 
        required: true    
    }
});


const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
