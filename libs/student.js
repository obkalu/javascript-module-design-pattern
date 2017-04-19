/*  lib/module.js  */
"use strict";
exports.__esModule = true;
var Student = (function () {
    function Student() {
        this.courses = ["CS101", "CS102", "CS103"];
    }
    // public methods
    Student.prototype.getCourses = function () {
        return this.courses.join(", ");
    };
    Student.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    return Student;
}());
exports["default"] = Student;
