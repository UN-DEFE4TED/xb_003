const otpGenerator = require('otp-generator')

let otp = otpGenerator.generate(6, {lowerCaseAlphabets:false, upperCaseAlphabets: false, specialChars: false });

console.log(otp);