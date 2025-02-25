import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    title: {
        type: String,  
        required: true
    },  
content: {
    type: String, 
    required: true 
}, 
comments: [
    {
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'comment'
    }
]

});  

const post = mongoose.model('post' , postSchema); 

export default post; 