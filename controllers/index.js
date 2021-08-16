const user = require('./user');
const service = require('./service');
const blog = require('./blog');


const mainController = { user, service, blog };

module.exports = mainController;
