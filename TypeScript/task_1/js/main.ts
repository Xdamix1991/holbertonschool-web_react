interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;

}

interface Directors extends Teacher {
	numberOfReports: number,
}

function printTeacher(firstName: string, lastName: string): string {

	return `${firstName[1]}. ${lastName}`;
}

interface Student {
	firstName: string;
	lastName: string;

}

class StudentClass implements Student {
	firstName: string;
	lastName: string;
	constructor (firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework():string {
		return 'Currently working'
	}
	displayName() {
		return this.firstName
	}
}

const teacher_1: Teacher = {
	firstName: "lamine",
	lastName: "bouricha",
	fullTimeEmployee: true,
	location: "gorron",
	contrat: "no"
}

const director_1: Directors = {
	firstName: "lamine",
	lastName: "bouricha",
	fullTimeEmployee: true,
	location: "gorron",
	contrat: "no",
	numberOfReports: 2

}

console.log(teacher_1)
console.log (director_1)
console.log(printTeacher('lamine', 'bbr'));

const student = new StudentClass('hellooo', 'Doe');

console.log(student.workOnHomework());
console.log(student.displayName());
