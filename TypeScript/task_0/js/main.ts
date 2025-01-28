interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;

}
const student1: Student = {
	firstName: "hello",
	lastName: "world",
	age: 1,
	location: "laval",
};
const student2 : Student = {
	firstName: "salut",
	lastName: "leMonde",
	age: 1,
	location: "laval",
};

const studentsList: Student[] = [student1, student2];


const table = document.createElement("table")


// Populate the table with student data
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);
