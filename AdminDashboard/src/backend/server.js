import express from 'express';
const app = express();
import cors from 'cors';
import {collection} from './models/users.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { empoylees } from './models/employee.js';

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

app.post("/create",async(req,res)=>{
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGO_URL);

    const{name,age,designation} = req.body;

    try{
        const check = await empoylees.create({name:name,age:age,designation:designation});

        if(check){
            res.send("Employee Created");
        }else{
            res.send("Employee Creation Failed");
        }
    }
    catch(err){
        console.log(err);
    }
});

app.get('/employees', async (req,res) => {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGO_URL);
    const Employees = await empoylees.find();
    res.json(Employees);
    console.log(res.json(Employees));
});

app.delete('/employees/:id', async (req,res) => {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGO_URL);
    const id = req.params.id;
    console.log(id);
    const employee = await empoylees.findByIdAndDelete(id);
    if(employee){
        res.send("Employee Deleted");
        res.json(employee);
    }else{
        res.send("Employee Deletion Failed");
    }
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});