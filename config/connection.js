const mongoose= require("mongoose");
mongoose.connect("mongodb://0.0.0.0/newtry",
{
    useNewUrlParser: true, useUnifiedTopology: true
}
);
const db= mongoose.connection;
db.on("error",console.error.bind(console,"error connection to mongodb"));

db.once("open",function(){
    console.log("connect to dabase successfully");
});

module.exports=db;