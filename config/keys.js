if(process.env.NODE_ENV == 'production'){
  // in production
  module.exports = require ('./prod');

}
else {
  module.exports = require ('./dev');
}
