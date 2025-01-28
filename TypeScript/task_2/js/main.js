var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return ('Working from home');
    };
    Director.prototype.getCoffeeBreak = function () {
        return ('Getting a coffee break');
    };
    Director.prototype.workDirectorTasks = function () {
        return ('Getting to director tasks');
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return ('Cannot work from home');
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return ('Cannot have a break');
    };
    Teacher.prototype.workTeacherTasks = function () {
        return ('Getting to work');
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher;
    }
    return new Director;
}
var employee_1 = createEmployee(400);
var employee_2 = createEmployee(600);
console.log(employee_1);
console.log(employee_2);
