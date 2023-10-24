const fs = require('fs');

const content = fs.readFileSync('./src/html/index.html', 'utf-8');
console.log(content)