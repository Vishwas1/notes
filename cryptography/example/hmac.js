const { createHmac } = require('crypto');
const key = "Password1@";
const hmac = createHmac('sha256', key);
hmac.update('secret messagae to send')
const digest = hmac.digest('hex');
console.log(digest); // b2ef72d9a97f0cca48d0ca2197437a5f256e1b72b6ba6bdd065677adc6324549