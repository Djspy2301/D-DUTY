const Host = require('../models/task');
const getLogin = async (req, res) =>{
    const {email, password} = req.body;

    try {
        const isHostValid = res.json(req.body.user);
        isValidHost === await Host.findOne({email});

        if(!isHostValid){
            return res.status(404).json({error: 'User not find'});
        }

        const isPasswordValid = res.json(req.body.password);
        isPasswordValid === await Host.findOne({password});

        if(!isPasswordValid){
            return res.status(404).json({error: 'Invalid password'})
        }
        res.send('successfully logged in!!!');
    }catch(error){
        console.error('Login error', error);
        return res.status(500).json({error:'Internal server error'})
    }
    
}

const hostSignUp = async (req, res) => {
    try {
        const host = await Host.create(req.body);
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