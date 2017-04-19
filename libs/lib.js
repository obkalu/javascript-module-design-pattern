// Named Exports
"use strict";
exports.__esModule = true;
exports.sqrt = Math.sqrt;
function square(x) {
    return (x * x);
}
exports.square = square;
function diag(x, y) {
    return exports.sqrt(square(x) + square(y));
}
exports.diag = diag;
