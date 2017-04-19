/*  libs/module.js  */
class Student {

    courses = ["CS101", "CS102", "CS103"];

    constructor() {
        
    }

    // public methods
    getCourses() {
        return this.courses.join(", ");
    }

    addCourse(course) {
        this.courses.push(course);
    }
}
export default Student;