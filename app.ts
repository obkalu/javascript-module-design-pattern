// Before ES6, we used an IIFE to define a js reusable module

(function() {

    // declare private variables and/or functions

    return {
        // declare private variables and/or functions
    }
})();

// After ES6 - we now use the 'class' keyword
// See module file/definition inside - lib/student.js

/* IMPORT PART OF A MODULE */

import {square, diag} from "./libs/lib";

console.log(square(13));

console.log(diag(3, 4));