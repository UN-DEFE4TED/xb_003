const app = require('./app');


const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const PORT = process.env.PORT || 1200;

app.listen(PORT, ()=>{
    console.log(`\u001b[1;36m Listing on localhost:${PORT} \u001b[0m`);
});