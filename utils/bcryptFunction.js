const bcrypt = require('bcrypt');

async function verifyPassword(plainPass , hashPass){
    let ans = await bcrypt.compare(plainPass , hashPass);
    return ans ;
}

async function hashPassword(pass){
    let hash = await bcrypt.hash(pass , 10);
    return hash ;
}

module.exports = {verifyPassword , hashPassword} ;