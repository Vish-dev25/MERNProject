const express = require("express");
const router = express.Router();
const User = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

router.get('/login', async (req, res) => {
    const users = await User.find()
    res.json(users);

});

router.post('/signup', async(req, res) => {
    const { name, email, password, admin } = req.body;

    if (!name || !email || !password) {
        return res.status(422).json({ error: 'Please fill all fields' });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: 'Email already exists!' });
        }
        const user = new User({ name, email, password, admin });
        await user.save();
        res.status(201).json({ messge: "User registered successfully" })
    }

    catch (err) {
        console.log(err);
    }

});

router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Please fill all data' });
        }
        const user =  await User.findOne({ email: email });

        // console.log(user);
        if (user) {
            const isMatch =  await User.findOne({ password:password });     //bcrypt.compare(password from db compares with the current password on login)
            
            if (!isMatch) {
                res.status(400).json({ error: "Password Invalid Credentials" });
            }
            else {
                res.json({ message: "Log in successfully" });
            }
        }
        else {
            res.status(400).json({ error: "Email Invalid Credentials" });
        }


    } catch (err) {
        console.log(err)
    }
})
router.get('/logout', async (req, res) => {
    res.send('Logout')
})

module.exports = router