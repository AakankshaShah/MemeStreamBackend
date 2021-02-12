import { response } from 'express';
import  mongoose  from 'mongoose';
import Memes from '../models/memeModel.js';

export const getMemes= async (request,response) =>
{   try
    {
        const postMessages=await Memes.find().sort('dateOfCreation').limit(100);
        // console.log(postMessages);
        response.status(200).json(postMessages);

    }
    catch(error)
    {response.status(404).json({ message: error.message});

    }
    //response.send('Response is being sent -working!');

}

export const getMemesByID = async (request,response) =>
{   try
    {
        const postMessages=await Memes.findById(request.params.id);
        // console.log(postMessages);
        response.status(200).json(postMessages);

    }
    catch(error)
    {response.status(404).json({ message: error.message});

    }
    //response.send('Response is being sent -working!');

}

export const createMeme = async (request,response) => {
    //response.send('Meme creation method');
    const post = request.body;
    console.log(post)

    const newMeme = new Memes(post);



     try{
          await newMeme.save();
          response.status(201).json(newMeme);
     }
     catch(error)
     {
         console.log(error.message)
          response.status(409).json( { message: error.message});
     }




}

export const updateMeme =async (request,response) =>{
    // async hta de??
    console.log(request.body.message)
 const{id: _id}= request.params;
 const post=request.body;

//  if(!mongoose.Types.ObjectID.isValid(_id))
//  return response.status(404).send('No post with that id');
// else
{
    try{
        const updatedMeme= await Memes.findByIdAndUpdate(_id,{ ...post,_id},{new:true});
    response.json(updatedMeme);  
    }catch(error){
        response.status(501).json( { message: error.message});
    }
    
}



}

export const deleteMeme= async(request,response) =>{
    const {id} =request.params;
    await Memes.findByIdAndRemove(id);
    response.json({message:'Meme Deleted Successfully'});


}

export const likeMeme=async(request,response) =>
{
  const{id} =request.params;
  const post =await Memes.findById(id);
  const updatedMeme=await Memes.findByIdAndUpdate(id,{likeCounts:post.likeCounts + 1},{new : true});

response.json(updatedMeme);


}