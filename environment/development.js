const path = require('path');

module.exports = {
  dbUrl: 'mongodb+srv://dev:leon@cluster0.ez55o.mongodb.net/lcvp?retryWrites=true&w=majority',
  cert: path.join( __dirname, '../ssl/local.crt'),
  key: path.join( __dirname, '../ssl/local.key'),
  portHttp: 3000,
  portHttps: 3001
}