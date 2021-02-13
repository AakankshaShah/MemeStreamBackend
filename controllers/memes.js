import { response } from 'express';
import  mongoose  from 'mongoose';
import Memes from '../models/memeModel.js';
//Implementation of all functionalities used in different routes for memes


//Fetching latest 100 memes saved in database
export const getMemes= async (request,response) =>
{   try
    {
        let postMessages=await Memes.find().sort('dateOfCreation').limit(100);
        // console.log(postMessages);
        let ans = [];
        for(var i=0;i<postMessages.length;i++)
        {
          
            let temp = {...postMessages[i]._doc,id:postMessages[i]._id}
            delete temp._id;
            delete temp.__v;
            //console.log(temp)
            ans.push(temp);
            //console.log(postMessages[i])

        }
        
        response.status(200).json(ans);

    }
    catch(error)
    {response.status(404).json({ message: error.message});

    }
    //response.send('Response is being sent -working!');

}
//Fetching memes by their id
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
//Creating new memes
export const createMeme = async (request,response) => {
    //response.send('Meme creation method');
    const post = request.body;
    //console.log(post)

    const newMeme = new Memes(post);



     try{
          await newMeme.save();
          let temp = {...newMeme._doc,id:newMeme._id}

  delete temp._id;
  delete temp.__v;
  //console.log(temp)
    //console.log("hereeeeeeeeee")
          response.status(201).json(temp);
     }
     catch(error)
     {
         console.log(error.message)
          response.status(409).json( { message: error.message});
     }




}
//Updating existing memes in database
export const updateMeme =async (request,response) =>{
    
    //console.log(request.body.message)
 const{id: id}= request.params;
 const post=request.body;

//  if(!mongoose.Types.ObjectID.isValid(id))
//  return response.status(404).send('No post with that id');
// else
{
    try{
        const updatedMeme= await Memes.findByIdAndUpdate(id,{ ...post,id},{new:true});
        let temp = {...updatedMeme._doc,id:updatedMeme._id}

  delete temp._id;
  delete temp.__v;
  //console.log(temp)
    //console.log("hereeeeeeeeee")
response.json(temp);
    }catch(error){
        response.status(501).json( { message: error.message});
    }
    
}



}
//Deleting Existing memes
export const deleteMeme= async(request,response) =>{
    const {id} =request.params;
    await Memes.findByIdAndRemove(id);
    response.json({message:'Meme Deleted Successfully'});


}
//Liking memes
export const likeMeme=async(request,response) =>
{
  const{id} =request.params;
  try{

  
  const post =await Memes.findById(id);
  const updatedMeme=await Memes.findByIdAndUpdate(id,{likeCounts:post.likeCounts + 1},{new : true});
  let temp = {...updatedMeme._doc,id:updatedMeme._id}

  delete temp._id;
  delete temp.__v;
  //console.log(temp)
    //console.log("hereeeeeeeeee")
response.json(temp);
  }
  catch(error)
  {
      response.status(404).send({message:"Error in like"});
  }


}