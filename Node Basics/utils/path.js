const path = require("path");
console.log("fil nam:", path.dirname(require.main.filename));
module.exports = path.dirname(require.main.filename);
