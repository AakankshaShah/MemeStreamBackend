//Database meme schema and indexes defined here
import mongoose from 'mongoose';

const memeSchema=mongoose.Schema({
    
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

memeSchema.index({
    caption: 1,
    name: 1,
    url: 1
  }, {
    unique: true,
});

const MemeSchema = mongoose.model('MemeSchema',memeSchema);
export default MemeSchema;