/* eslint-disable no-undef */
import experss from 'express';
const app = experss();
import cors from 'cors';
import { collection } from './mongo';
app.use(cors());
app.use(experss.json());
app.use(experss.urlencoded({ extended: true }));


app.get("/",cors(),(req,res)=>{
    res.send("Hello World");
});

app.post("/login",async(req,res)=>{
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