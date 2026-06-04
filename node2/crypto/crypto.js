

const crypto = require('crypto');

const passward = '123456'

const hash = crypto
.createHash('sha256')
.update(passward)
.digest('hex');

console.log(hash);
