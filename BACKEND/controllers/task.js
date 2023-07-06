const Host = require('../models/task');
const CryptoJS = require("crypto-js");

const getLogin = async (req, res) =>{

    try {
        const user = await Host.findOne({email: req.body.email});
        
        if(!user){
            return res.status(401).json("Wrong Credentials!")
        }

        const hashPassword = CryptoJS.AES.decrypt(
            user.password, 
          process.env.PASS_SEC
        );
        const password = hashPassword.toString(CryptoJS.enc.Utf8);
        if(password !== req.body.password){
            return res.status(401).json("Wrong Credentials");  
        }

        res.status(200).json(user);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
    
}
//REGISTRATION
const hostSignUp = async (req, res) => {
    const newUser= new Host({
        user: req.body.user,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.PASS_SEC)
            .toString()
    });
    try {
        const host = await Host.create(newUser);
        res.status(201).json({host});   
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const getAllUsers = (req, res) => {
    res.send("All Users Table!!!")
}

const createUser = (req, res) => {
    res.send("user created!!!");
}

const updateUser = (req, res) => {
    res.send("user updated!!!");
}

const deleteUser = (req, res) => {
    res.send("user Deleted Successfully!!!");
}

module.exports={
    getLogin, createUser,
    hostSignUp, updateUser,
    getAllUsers, deleteUser
}