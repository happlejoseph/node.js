

const crypto = require('crypto');

const secret = 'secretKey'

const hmac = crypto
.createHmac('sha256',secret)
.update('helo Nodejs')
.digest('hex')
console.log(hmac);


