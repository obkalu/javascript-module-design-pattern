/* main.js */
"use strict";
exports.__esModule = true;
// We import 'Student' type from the 'student.js' module
var student_1 = require("./libs/student");
var studentJohn = new student_1["default"]();
studentJohn.addCourse("CS104");
console.log(studentJohn.getCourses());
