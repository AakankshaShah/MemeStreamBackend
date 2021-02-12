import mongoose from 'mongoose';

const postSchema=mongoose.Schema({
caption:{
    type: String,
    required: true
},
message:String,
name:{
    type: String,
    required: true
},
tags: [String],
url:{
    type: String,
    required: true
},
likeCounts:{
    type:Number,
    default:0
},
dateOfCreation: {
    type:Date,
    default:new Date()
},
});

const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;