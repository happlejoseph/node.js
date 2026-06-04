

const crypto = require('crypto');

const passward = '123456'

const salt = crypto.randomBytes(16).toString('hex');

const hash = crypto
.createHash('sha256')
.update(passward + salt)
.digest('hex')

console.log(hash);
console.log(salt);

