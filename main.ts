/* main.js */

// We import 'Student' type from the 'student.js' module

import Student from "./libs/student"; 

const studentJohn = new Student();
studentJohn.addCourse("CS104");

console.log(studentJohn.getCourses());
