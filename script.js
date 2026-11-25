let employees = [
    { id: 1, name: "Arun", age: 25, salary: 25000, department: "IT", active: true },
    { id: 2, name: "Rahul", age: 28, salary: 35000, department: "HR", active: true },
    { id: 3, name: "Ajay", age: 24, salary: 20000, department: "IT", active: false },
    { id: 4, name: "John", age: 30, salary: 45000, department: "Finance", active: true },
    { id: 5, name: "Vishnu", age: 27, salary: 30000, department: "IT", active: true }
];

// function Employeenames() {
//     let data =""
//     for(let i=0;i<employees.length; i++){
//         data+=employees[i].name +"<br>"
//     }
//     document.getElementById("display").innerHTML = data

    
// }

// Employeenames();

// let emp = employees.map((emp, index) => emp.name.toUpperCase())
// console.log(emp);
// document.getElementById("uppercase").innerHTML = emp


// let inactive = employees.filter((employees)=>employees.active==false)
// document.getElementById("fals").innerHTML = inactive.map(employees => `<p>${employees.name} - ${employees.active}</p>`).join("")
// console.log(inactive);

// let ara1=employees.slice(0,3)
// document.getElementById("first").innerHTML = ara1.map(employees => `<p>${employees.name}</p>`).join("")
// console.log(ara1);

// let copy=[...employees]
// document.getElementById("copp").innerHTML =  copy.map(employees => `<p>id:${employees.id},name:${employees.name},age:${employees.age},Salary:${employees.salary},department:${employees.department},Active:${employees.active}</p>`).join("")
// console.log(copy);

// let [first]=employees
// document.getElementById("destr").innerHTML = `<p>name:${first.name},age:${first.age},Salary:${first.salary}</p>`;

function department(){
    let init = employees.filter((employees)=>employees.department=="IT")
    document.getElementById("init").innerHTML = init.map(employees => `<p>${employees.name} - ${employees.department}</p>`).join("")

}
function high(){
    let values = employees.filter((employees)=>employees.salary>25000)
    document.getElementById("greater").innerHTML = values.map(employees => `<p>${employees.name} - ${employees.salary}</p>`).join("")

}




