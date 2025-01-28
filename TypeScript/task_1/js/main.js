function printTeacher(firstName, lastName) {
    return "".concat(firstName[1], ". ").concat(lastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var teacher_1 = {
    firstName: "lamine",
    lastName: "bouricha",
    fullTimeEmployee: true,
    location: "gorron",
    contrat: "no"
};
var director_1 = {
    firstName: "lamine",
    lastName: "bouricha",
    fullTimeEmployee: true,
    location: "gorron",
    contrat: "no",
    numberOfReports: 2
};
console.log(teacher_1);
console.log(director_1);
console.log(printTeacher('lamine', 'bbr'));
var student = new StudentClass('hellooo', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName());
