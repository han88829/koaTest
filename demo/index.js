var server = require("./8");
var router = require("./route");
 
server.start(router.route);