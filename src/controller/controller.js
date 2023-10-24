const fs = require('fs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});


// let infoUserSchema = require('./../models/info_userModel');
// let battleModel = require('./../models/battleModel');
// let userModel = require('./../models/userModel');
// let DB = require('./../db') ;
// let userDB = DB.USERSDB;


let indexHtml = fs.readFileSync('./src/html/index.html', 'utf-8');
let homeHtml = fs.readFileSync('./src/html/home.html', 'utf-8');
let battleHtml = fs.readFileSync('./src/html/battle.html', 'utf-8');
let battleDetailsHtml = fs.readFileSync('./src/html/battle-details.html', 'utf-8');
let loginHtml = fs.readFileSync('./src/html/login.html', 'utf-8')
let signupHtml = fs.readFileSync('./src/html/signup.html', 'utf-8')
let askloginHtml = fs.readFileSync('./src/html/ask_login.html', 'utf-8')


exports.home = async (req, res)=>{
    res.send('hello there')
}

// exports.login = async (req, res)=>{
//     res.send(loginHtml)
// }
// exports.loginPost = async (req, res)=>{
//     try {
//         let user = await userModel.findOne({phone: req.body.phone, password: req.body.password});
//         if (!user) {
//             console.log(user)
//             loginHtml = loginHtml.replace('<!--$[err]-->', 'user not found...')
//             return res.send(loginHtml)
//         }
//         const token = jwt.sign({id: user._id.valueOf(), name: user.name, ffuid: user.ffuid}, process.env.SECRET_STR);
//         res.cookie('UFTN', token, {maxAge: 9000000000000})
//         res.redirect('/')
//     } catch (err) {
//         console.log(err.messgae)
//         res.redirect('/login')
//     }
// }
// exports.signup = async (req, res)=>{
//     res.send(signupHtml)
// }
// exports.signupPost = async (req, res)=>{
//     try {
//         let lastUid = await userModel.find({});
//         lastUid = +(lastUid[lastUid.length-1].uid)+1;
//         req.body.uid = lastUid;
//         let user = req.body;
//         try {
//             user = await userModel.create(user);
//             let infoUserModel = userDB.model(user.uid, infoUserSchema)
//             infoUserModel.create(req.body);
//             const token = jwt.sign({id: user._id.valueOf(), name: user.name, ffuid: user.ffuid}, process.env.SECRET_STR);
//             res.cookie('UFTN', token, {maxAge: 900000000000})
//             res.redirect('/')
//         } catch (err) {
//             console.log(err.message)
//         }
//     } catch (err) {
//         console.log(err.message);
//         res.redirect('/signup')
//     }
// }
// exports.home = async (req, res)=>{
//     let battle = await battleModel.find({});
//     battle = battle.map((obj)=>{
//         let output = battleHtml.replaceAll('<!--$[battleMode]-->', obj.battleMode);
//         output = output.replaceAll('<!--$[gameMode]-->', obj.gameMode);
//         output = output.replaceAll('<!--$[map]-->', obj.map);
//         output = output.replaceAll('<!--$[teamMode]-->', obj.teamMode);
//         output = output.replaceAll('<!--$[ammo]-->', obj.ammo);
//         output = output.replaceAll('<!--$[id]-->', obj.expiryId.id);
//         output = output.replaceAll('<!--$[month]-->', obj.expiry.month);
//         output = output.replaceAll('<!--$[date]-->', obj.expiry.date);
//         output = output.replaceAll('<!--$[year]-->', obj.expiry.year);
//         output = output.replaceAll('<!--$[hour]-->', obj.expiry.hour);
//         output = output.replaceAll('<!--$[minutes]-->', obj.expiry.minutes);
//         output = output.replaceAll('<!--$[_1]-->', obj._1);
//         output = output.replaceAll('<!--$[_2]-->', obj._2);
//         output = output.replaceAll('<!--$[_3]-->', obj._3);
//         output = output.replaceAll('<!--$[slot]-->', obj.slots);
//         let width = 0;
//         let registered = 0;
//         if(obj.teams){width = Object.keys(obj.teams).length*100/obj.slots; registered = Object.keys(obj.teams).length}
//         output = output.replaceAll('<!--$[registered]-->', registered);
//         output = output.replaceAll('<!--$[bar-width]-->',width);
//         output = output.replaceAll('<!--$[entry]-->', obj.entry);
//         return output;
//     });
//     battle = battle.join('')
//     let response = indexHtml.replaceAll('<!--$[active-H]-->', "active");
//     if (!req.user) {
//         response = response.replaceAll('<!--$[xlogin]-->', 'xlogin')
//         response = response.replaceAll('fa-circle-user', 'fa-user-plus')
//     }if(req.user){response = response.replaceAll('<!--$[username]-->', req.user.name.toUpperCase());
//     response = response.replaceAll('<!--$[userid]-->', req.user.ffuid);}

//     response = response.replaceAll('<!--$[userprofile]-->', 'profile');
//     response = response.replaceAll('<!--$[index]-->', homeHtml);
//     response = response.replaceAll('<!--$[battle]-->', battle);
    
//     res.send(response);
// }
// exports.battle = async (req, res)=>{
//     let id = req.query.id;
//     let battle = await battleModel.find({'expiryId.id': id});
//     battle = battle.map((obj)=>{
//         let output = battleDetailsHtml.replaceAll('<!--$[map]-->', obj.map);
//         output = output.replaceAll('<!--$[battleMode]-->', obj.battleMode);
//         output = output.replaceAll('<!--$[_1]-->', obj._1);
//         output = output.replaceAll('<!--$[_2]-->', obj._2);
//         output = output.replaceAll('<!--$[_3]-->', obj._3);
//         output = output.replaceAll('<!--$[id]-->', obj.expiryId.id);
//         output = output.replaceAll('<!--$[teamMode]-->', obj.teamMode);
//         output = output.replaceAll('<!--$[ammo]-->', obj.ammo);
//         output = output.replaceAll('<!--$[gunAttributes]-->', obj.setting.gunAttributes);
//         output = output.replaceAll('<!--$[characterSkill]-->', obj.setting.characterSkill);
//         output = output.replaceAll('<!--$[gameMode]-->', obj.gameMode);
//         output = output.replaceAll('<!--$[month]-->', obj.expiry.month);
//         output = output.replaceAll('<!--$[date]-->', obj.expiry.date);
//         output = output.replaceAll('<!--$[date]-->', obj.expiry.date);
//         output = output.replaceAll('<!--$[year]-->', obj.expiry.year);
//         output = output.replaceAll('<!--$[hour]-->', obj.expiry.hour);
//         output = output.replaceAll('<!--$[minutes]-->', obj.expiry.minutes);
//         output = output.replaceAll('<!--$[slots]-->', obj.slots);
//         output = output.replaceAll('<!--$[presetMode]-->', obj.setting.presetMode);
//         output = output.replaceAll('<!--$[round]-->', obj.setting.round);
//         output = output.replaceAll('<!--$[randomBuff]-->', obj.setting.randomBuff);
//         output = output.replaceAll('<!--$[coin]-->', obj.setting.coin);
//         output = output.replaceAll('<!--$[cyberAirdrop]-->', obj.setting.cyberAirdrop);
//         output = output.replaceAll('<!--$[revival]-->', obj.setting.revival);
//         output = output.replaceAll('<!--$[hp]-->', obj.setting.hp);
//         output = output.replaceAll('<!--$[movementSpeed]-->', obj.setting.movementSpeed);
//         output = output.replaceAll('<!--$[jumpHeight]-->', obj.setting.jumpHeight);
//         output = output.replaceAll('<!--$[environment]-->', obj.setting.environment);
//         output = output.replaceAll('<!--$[limitedAmmo]-->', obj.setting.limitedAmmo);
//         output = output.replaceAll('<!--$[fallDamage]-->', obj.setting.fallDamage);
//         output = output.replaceAll('<!--$[autoRevival]-->', obj.setting.autoRevival);
//         output = output.replaceAll('<!--$[airdrop]-->', obj.setting.airdrop);
//         output = output.replaceAll('<!--$[zoneShrinkSpeed]-->', obj.setting.zoneShrinkSpeed);
//         output = output.replaceAll('<!--$[vehicles]-->', obj.setting.vehicles);
//         output = output.replaceAll('<!--$[outOfZoneDamage]-->', obj.setting.outOfZoneDamage);
//         output = output.replaceAll('<!--$[uav]-->', obj.setting.uav);
//         output = output.replaceAll('<!--$[airstrike]-->', obj.setting.airstrike);
//         output = output.replaceAll('<!--$[airship]-->', obj.setting.airship);
//         output = output.replaceAll('<!--$[genericEnemyOutfit]-->', obj.setting.genericEnemyOutfit);
//         output = output.replaceAll('<!--$[hideTeammateNickname]-->', obj.setting.hideTeammateNickname);
//         output = output.replaceAll('<!--$[friendlyFire]-->', obj.setting.friendlyFire);
//         output = output.replaceAll('<!--$[preciseAim]-->', obj.setting.preciseAim);
//         output = output.replaceAll('<!--$[characterSkill]-->', obj.setting.characterSkill);
//         output = output.replaceAll('<!--$[loadout]-->', obj.setting.loadout);
//         output = output.replaceAll('<!--$[gunAttributes]-->', obj.setting.gunAttributes);
//         output = output.replaceAll('<!--$[inGameMission]-->', obj.setting.inGameMission);
//         output = output.replaceAll('<!--$[inMatchQuest]-->', obj.setting.inMatchQuest);
//         output = output.replaceAll('<!--$[entry]-->', obj.entry);
//         return output;
//     })
//     battle = battle.join('')
//     res.send(battle);
// }
// exports.friend = async (req, res)=>{
//     let response = indexHtml.replaceAll('<!--$[active-F]-->', "active")
//     if (!req.user) {
//         response = response.replaceAll("<!--$[index]-->",askloginHtml)
//         res.send(response)
//         return;
//     }
//     res.send(response)
// }     
// exports.contest = async (req, res)=>{
//     let response = indexHtml.replaceAll('<!--$[active-C]-->', "active")
//     if (!req.user) {
//         response = response.replaceAll("<!--$[index]-->",askloginHtml)
//         res.send(response)
//         return;
//     }
//     res.send(response)
// }     
// exports.tournament = async (req, res)=>{
//     let response = indexHtml.replaceAll('<!--$[active-T]-->', "active")
//     res.send(response)
// }   
// exports.leaderboard = async (req, res)=>{
//     let response = indexHtml.replaceAll('<!--$[active-L]-->', "active")
//     res.send(response)
// }     
// exports.profile = async (req, res)=>{ 
//     if (!req.user) {
//         res.redirect('/login')
//         return;
//     }
//     res.send("you are in notification section...")
// }
// exports.notification = async (req, res)=>{
//     if (!req.user) {
//         let response = askloginHtml
//         res.send(response)
//         return;
//     }
//     res.send("you are in notification section...")
// }
// exports.refer = async (req, res)=>{
//     if (!req.user) {
//         let response = askloginHtml
//         res.send(response)
//         return;
//     }
//     res.send("you are in notification section...")
// }
// exports.support = async (req, res)=>{
//     if (!req.user) {
//         let response = askloginHtml
//         res.send(response)
//         return;
//     }
//     res.send("you are in support section...")
// }     
 