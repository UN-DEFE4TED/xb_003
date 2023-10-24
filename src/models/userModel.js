// const mongoose = require('mongoose');
// const DB = require('./../db');
// const XBDB = DB.XBDB;

// let userSchema = mongoose.Schema({
//     uid: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     ffuid: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     phone: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     mail: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     deposite: {
//         type: String,
//         required: true,
//         default: "0"
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: String,
//         required: true,
//         default: new Date().toString()
//     }
// });

// const usersModel = XBDB.model('users', userSchema);

// module.exports = usersModel;