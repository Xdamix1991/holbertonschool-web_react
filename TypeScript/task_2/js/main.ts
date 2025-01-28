interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home'
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break'
	}
	workDirectorTasks(): string {
		return 'Getting to director tasks'
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home'
	}
	getCoffeeBreak(): string {
		return 'Cannot have a break'
	}
	workTeacherTasks(): string {
		return 'Getting to work'
	}
}

function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === "number" && salary < 500) {
		return new Teacher;
	}
	return new Director;
}

function isDirector (employee: unknown): employee is Director {
	return employee instanceof Director;
}

function executeWork (employee: unknown) {
	if (employee instanceof Director) {
		console.log(employee.workDirectorTasks());
	}
	if (employee instanceof Teacher) {
		console.log(employee.workTeacherTasks());
	}
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
	if (todayClass === "Math") {
		console.log('Teaching Math')
		return 'Teaching Math'
	}
	if (todayClass === "History") {
		console.log('Teaching History')
		return 'Teaching History'
	}
}

const employee_1 = createEmployee(400);
const employee_2 = createEmployee(600);

console.log(employee_1);
console.log(employee_2);

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

teachClass('Math');
teachClass('History');
