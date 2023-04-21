const User= require("../models/users");

module.exports.createUser= async function(req,res){
    try{
        let user=await User.findOne({email:req.body.email});

        if(user)
        {
            res.send("user already exist");
        }
        else{
            await user.create({
                Firstname:req.body.Firstname,
                Lastname:req.body.Lastname,
                email:req.body.email,
                Phone:req.body.Phone,
                password:req.body.password,

            });
            res.send("user created succesfully");
        }
    }
    catch(error){
        console.log("error while creating user",error);
        return res.redirect("/users/register");
    }

}
