const express = require('express');
const app = express();

// importing custome modules
const ffcontroller = require('./../controller/controller')
// const protect = require('./../controller/protect')

const router = express.Router();

router.route('/')
    .get(ffcontroller.home)
 
// router.route('/login')
//     .get(ffcontroller.login)
//     .post(ffcontroller.loginPost)
 
// router.route('/signup')
//     .get(ffcontroller.signup)
//     .post(ffcontroller.signupPost)

// router.route('/battle')
//     .get(protect, ffcontroller.battle)
 
// router.route('/contest')
//     .get(protect, ffcontroller.contest)
 
// router.route('/friend')
//     .get(protect, ffcontroller.friend)
 
// router.route('/profile')
//     .get(protect, ffcontroller.profile)
 
// router.route('/tournament')
//     .get(protect, ffcontroller.tournament)
 
// router.route('/leaderboard')
//     .get(protect, ffcontroller.leaderboard)
 
// router.route('/notification')
//     .get(protect, ffcontroller.notification)
 
// router.route('/refer')
//     .get(protect, ffcontroller.refer)
 
// router.route('/support')
//     .get(protect, ffcontroller.support)
 
 
// module.exports = router;