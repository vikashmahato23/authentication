const User = require("../models/users.model");


const register = async(req,res) => {
    try {
       
        let user = await User.findOne({email: req.body.email});
       e
        if (user) {
            return res.status(200).send("This email is already registered with us");
        }
       
        user = await User.create(req.body);
        return res.status(200).send(user);
    } catch(err) {
        return res.status(500).send(err);
    }
}

const login = async(req,res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (user) {
            return res.status(200).send("You're logged in!");
        }
        return res.status(200).send("Incorrect email/password");
    } catch(err) {
        return res.status(500).send(err);
    }
}

module.exports = {register,login};