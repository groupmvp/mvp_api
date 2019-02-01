'use strict';
const express = require('express');

const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User } = require('./userModel.js')
    



const createTokenForUser =  async (userEmail) => {
    return await jwt.sign({ sub: userEmail, iat: Math.floor(Date.now() / 100) }, process.env.JWT_SECRET, { expiresIn: '7d'} );
    
      };

exports.register = async (req, res) => {
    let {username, email, password} = req.body;
    // console.log('username', username)
    // console.log('email', email)
    // console.log('password', password)
        if (!email || !password) {
            console.error('email and password must be provided')
            res.status(422).send('email and password must be provided')
        }
        const user = await User.findOne({email: email})
            if (user) {
                console.error('email already exists')
                return res.status(422).send('email already exists')
            } else {
            const hashedPassword = await bcrypt.hashSync(password, 10);
            password = hashedPassword
            const newUser = new User({username, email, password});
            
            let finalUser = newUser.save()
                const token  = await createTokenForUser(email);
                return res.status(200).set('authorization', token).send({ token })
            }
        }

exports.login = async(req, res, next) => {
    const { email } = req.body
    try {
        const token = await createTokenForUser(email)
        return res.status(200).set('authorization', token).send(email)
    } catch(e) {
        return next(e)
    }
}