const User = require("../model/userModel");



const addUser = async (req,res) => {
    
    try {
        const exist = await User.findOne({sub : req.body.sub});
        if(exist){
            res.status(200).json({msg : 'user already exist'})
        }
        const newUser = await User.create(req.body)
        console.log(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error.message);
    }

}

const getAllUsers = async (req,res) => {

    try {
    const users = await User.find();
    res.status(200).json(users);
    } catch(error) {
    res.status(500).json(error.message);
    }
    }



module.exports = {addUser, getAllUsers}