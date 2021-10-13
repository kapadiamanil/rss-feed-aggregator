// To use ES6 syntax in nodejs files
require("@babel/register")({
    presets: ["@babel/env"]
});
require("regenerator-runtime/runtime");
// Import the rest of our application.
module.exports = require("./server");
