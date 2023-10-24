const jwt = require('jsonwebtoken');
const util = require('util');

const dotenv = require('dotenv');
dotenv.config({path: './.env'});


let userModel = require('./../models/userModel');


const protect = async function (req, res, next){
    if (!req.cookies.UFTN) {
        req.isLogin = false
        req.user = undefined
    }else{
        let user;
        let decodedToken;
        req.isLogin = true
        let token = req.cookies.UFTN;
        try {
             decodedToken = await util.promisify(jwt.verify)(token, process.env.SECRET_STR)
             user = await userModel.findOne({_id: decodedToken.id})
        } catch (err) {
            console.log(err.message)
        }
        req.user = user;
    }
    next()
}

module.exports = protect;