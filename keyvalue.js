var person={
    name:"akhila",
    age:24,
    gender:"female",
    walk(){
        console.log("person is walking");
    }

}

console.log(person.name);
console.log(person.age);
person.walk()

// employe

var employe={
    id:1,
    name:"sayi",
    dept:"eng",
    salary:1000000

}
console.log(employe.name);

// gender check

console.log("gender" in employe);

// add new key value
employe.gender="male"
console.log(employe);
// add 5000 to current salary
employe["salary"]+=5000
console.log(employe);

// student

var student={
    rol:110,
    course:"mca",
    skills:["c","java","python"],
}

console.log(student.skills);
console.log("total" in student);
student.total=500
console.log(student);
student.total+=50
console.log(student);