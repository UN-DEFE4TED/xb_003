// const mongoose = require('mongoose');
// const DB = require('./../db');
// const XBDB = DB.XBDB;

// let battleScehma = mongoose.Schema({
//     uid: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     status: {
//         type: String,
//         required: true,
//         default: "upcoming"
//     },
//     expiryId: {
//         date: {
//             type: Number,
//             required: true,
//         },
//         id: {
//             type: String,
//             require: true
//         }
//     },
//     battleMode: {
//         type: String,
//         required: true,
//         default: "br"
//     },
//     gameMode: {
//         type: String,
//         required: true,
//         default: "Battle Royal"
//     },
//     map: {
//         type: String,
//         required: true,
//         default: "BERMUDA"
//     },
//     teamMode: {
//         type: String,
//         required: true,
//         default: "Duo"
//     },
//     slots: {
//         type: Number,
//         required: true,
//         default: 24
//     },
//     ammo: {
//         type: String,
//         required: true,
//         default: "limited"
//     },
//     thumbnail: {
//         type: String,
//         required: true
//     },
//     expiry: {
//         month: {
//             type: String,
//             required: true,
//         },
//         date: {
//             type: String,
//             required: true
//         },
//         year: {
//             type: String,
//             required: true
//         },
//         hour: {
//             type: String,
//             required: true
//         },
//         minutes: {
//             type: String,
//             required: true
//         },
//         id: {
//             type: Number,
//             required: true,
//         }
//     },
//     entry: {
//         type: Number,
//         required: true
//     },
//     _1: {
//         type: Number,
//         required: true
//     },
//     _2: {
//         type: Number,
//         required: true
//     },
//     _3: {
//         type: Number,
//         required: true
//     },
//     createdAt: {
//         type: String,
//         required: true,
//         default: new Date().toString()
//     },
//     setting: {
//         gameMode: {
//             type: String,
//             required: true,
//             default: "Battle Royal"
//         },
//         map: {
//             type: String,
//             required: true,
//             default: "BERMUDA"
//         },
//         teamMode: {
//             type: String,
//             required: true,
//             default: "solo"
//         },
//         players: {
//             type: String,
//             required: true,
//             default: "48"
//         },
//         spectators: {
//             type: String,
//             required: true,
//             default: "30"
//         },
//         minimumLvl: {
//             type: String,
//             required: true,
//             default: "40"
//         },
//         presetMode: {
//             type: String,
//             required: true,
//             default: "classic"
//         },
//         revival: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         hp: {
//             type: String,
//             required: true,
//             default: "200" 
//         },
//         ep: {
//             type: String,
//             required: true,
//             default: "0"
//         },
//         jumpHeight: {
//             type: String,
//             required: true,
//             default: "100"
//         },
//         movementSpeed: {
//             type: String,
//             required: true,
//             default: "100"
//         },
//         environment: {
//             type: String,
//             required: true,
//             default: "day"
//         },
//         limitedAmmo: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         fallDamage: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         autoRevival: {
//             type: String,
//             required: true,
//             default: "no"
//         },
//         airdrop: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         zoneShrinkSpeed: {
//             type: String,
//             required: true,
//             default: "standard"
//         },
//         vehicles: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         outOfZoneDamage: {
//             type: String,
//             required: true,
//             default: "standard"
//         },
//         uav: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         airstrike: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         airship: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         genericEnemyOutfit: {
//             type: String,
//             required: true,
//             default: "no"
//         },
//         hideTeammateNickname: {
//             type: String,
//             required: true,
//             default: "no"
//         },
//         friendlyFire: {
//             type: String,
//             required: true,
//             default: "no"
//         },
//         preciseAim: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         characterSkill: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         loadout: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         gunAttributes: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         inGameMission: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         inMatchQuest: {
//             type: String,
//             required: true,
//             default: "no"
//         },
//         observeSpectateUponElimination: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         observeSwitchPosition: {
//             type: String,
//             required: true,
//             default: "yes"
//         },
//         observeEmulators: {
//             type: String,
//             required: true,
//             default: "off"
//         }
//     },
//     teams: {},
//     winners: {
//         type: Object
//     },
//     description: {
//         type: String,
//         default: "no description added."
//     }
// });

// const battleModel = XBDB.model('battles', battleScehma)

// module.exports = battleModel;