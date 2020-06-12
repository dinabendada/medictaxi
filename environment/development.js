const path = require('path');

module.exports = {
  dbUrl: 'mongodb+srv://max:free@cluster0-p1f9v.mongodb.net/<dbname>?retryWrites=true&w=majority',
  cert: path.join( __dirname, '../ssl/local.crt'),
  key: path.join( __dirname, '../ssl/local.key'),
  portHttp: 3000,
  portHttps: 3001
}