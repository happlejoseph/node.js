<<<<<<< HEAD
const { get } = require("node:http")


let allStudents = [
    {name:'Jeff',R_No:1,Class:10},
    {name:'Sara',R_No:2,Class:10},
    {name:'Diya',R_No:3,Class:10},
    {name:'Rohan',R_No:4,Class:10},
]

let students = document.getElementById('students');

function getStudents() {
    students.innerHTML = "";

    allStudents.forEach((student)=> {
        students.innerHTML +=

        `
        <div class = "student">
        <h1>Nmae:${student.name}</h1>
        <h3>Roll_No:${student.R_No}</h3>
        <h3>Class:${student.Class}</h3>
        </div>

        `

    })
}

getStudents()
=======


console.log('helo node js');
>>>>>>> 715fdda502612675a72b4ea5687db8601a38f8db
