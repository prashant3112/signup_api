const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user_controller");

router.post("/create",controllers.createUser);

router.get("*",(req,res) =>{
    res.send("<h>404</h>");
})

module.exprts= router;