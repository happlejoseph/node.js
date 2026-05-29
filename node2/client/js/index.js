


// let allStudents = [
//     {name:'Jeff',R_No:1,Class:10},
//     {name:'Sara',R_No:2,Class:10},
//     {name:'Diya',R_No:3,Class:10},
//     {name:'Rohan',R_No:4,Class:10},
// ]

// let students = document.getElementById('students');

// function getStudents() {
//     students.innerHTML = "";

//     allStudents.forEach((student)=> {
//         students.innerHTML +=

//         `
//         <div class = "student">
//         <h1>Name:${student.name}</h1>
//         <h3>Roll_No:${student.R_No}</h3>
//         <h3>Class:${student.Class}</h3>
//         </div>

//         `

//     })
// }

// getStudents()


// console.log('helo node js');


let students = []

async function getStudents() {

    const res = await fetch('http://localhost:3001/getStudents')
    const data = await res.json()

    students = data
    console.log(data);

    students.forEach((student)=> {
        document.getElementById('students').innerHTML=+

            `
            <tr>
                <td> <input type="text" id="name-${student._id}" value-"${student.name}"></td>
                <td> <input type="text" id="rno${student._id}" value-"${student.ron}"></td>
                <td> <input type="text" id="class-${student._id}" value-"${student.class}"></td>

                <td>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </td>
            
            </tr>
            
            `
    })    
}
