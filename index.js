import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import memeRoutes from './routes/memes.js';


const app=express();



app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));

app.use(cors());
app.use('/memes',memeRoutes);

const CONNECTION_URL='mongodb+srv://Aakanksha:akshadb21@cluster0.gxm4g.mongodb.net/akshadb?retryWrites=true&w=majority';

const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology: true})
.then(() =>app.listen(PORT, ()=> console.log(`The server is running on ${PORT}`)))
.catch((error) =>console.log("error hi there- "+error.message));

mongoose.set('useFindAndModify',false);