const { json } = require('express');
const Host = require('../models/host');
const User = require('../models/user');
const CryptoJS = require("crypto-js");

const getLogin = async (req, res) => {

    try {
        const user = await Host.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json("Wrong Credentials!")
        }

        const hashPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const password = hashPassword.toString(CryptoJS.enc.Utf8);
        if (password !== req.body.password) {
            return res.status(401).json("Wrong Credentials");
        }

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}
//HOST REGISTRATION
const hostSignUp = async (req, res) => {
    const newHost = new Host({
        user: req.body.user,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC)
            .toString()
    });
    try {
        const host = await Host.create(newHost);
        res.status(201).json({ host });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const getAllUsers = (req, res) => {
    res.send("All Users Table!!!")
}

//USER REGESTRATION
const createUser = async (req, res) => {
    // try {
    //     admin = await this.req._id;
    // } catch (error) {
    //     console.log(error);
    // }
    

    const newUser = new User({
        fName: req.body.fName,
        mName: req.body.mName,
        lName: req.body.lName,
        email: req.body.email,
        password: req.body.password,
        cPassword: req.body.cPassword,
        gender: req.body.gender,
        degignation: req.body.degignation,
        address: req.body.address,
        adminId: req.body.adminId
    })

    try {
        const user = await User.create(newUser);
        res.status(401).json({ user });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
//Displaying Staff List
const staffList = async (req, res) => {
    try {
        const staff = await User.find({});
        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json({msg: error});
        console.log(error);
    }
    
}

const updateUser = (req, res) => {
    res.send("user updated!!!");
}

const deleteUser = (req, res) => {
    res.send("user Deleted Successfully!!!");
}

module.exports = {
    getLogin, createUser,
    hostSignUp, updateUser,
    getAllUsers, deleteUser,
    staffList
}