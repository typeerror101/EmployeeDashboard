import express from 'express';
const app = express();
import cors from 'cors';
import {collection} from './models/users.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

app.use(cors());
app.use(express.json());
dotenv.config();
app.use(express.urlencoded({ extended: true }));

app.get("/",cors(),(req,res)=>{
    res.send("Hello World");
});

app.post("/login",async(req,res)=>{
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGO_URL);

    const{email,password} = req.body;

    try{
        const check = await collection.findOne({email:email,password:password});

        if(check){
            res.send("Login Success");
        }else{
            res.send("Login Failed");
        }
    }
    catch(err){
        console.log(err);
    }
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});