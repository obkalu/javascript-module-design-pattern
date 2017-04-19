// Before ES6, we used an IIFE to define a js reusable module
"use strict";
exports.__esModule = true;
(function () {
    // declare private variables and/or functions
    return {};
})();
// After ES6 - we now use the 'class' keyword
// See module file/definition inside - lib/student.js
/* IMPORT PART OF A MODULE */
var lib_1 = require("./libs/lib");
console.log(lib_1.square(13));
console.log(lib_1.diag(3, 4));
