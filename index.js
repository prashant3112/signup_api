const express= require("express");
const app=express();

const bodyParser= require("body-parser");
const cors= require("cors");
const db= require("./config/connection");
const router=require("./routes/user");
const users=require("./models/users");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const port= 8000;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("<body><h1>error 404</h1></body>");
});

app.listen(port,()=>{
    console.log("server running at port no ",port);
});