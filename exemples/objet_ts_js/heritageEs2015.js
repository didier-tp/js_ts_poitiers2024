"use strict";
class Person {
    constructor(firstName = "unknown", lastName = "unknown") {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
Person.comment = "person";
;
let p1 = new Person("axelle", "Aire");
console.log("p1=" + JSON.stringify(p1));
//console.log("p1.comment="+p1.comment);//person
class Student extends Person {
    constructor(firstName = "unknown", lastName = "unknown", schoolName = "unknown", grade = 0) {
        super(firstName, lastName);
        this.schoolName = schoolName;
        this.grade = grade;
    }
}
let s1 = new Student("jean", "Bon", "SchoolA", 4);
console.log("s1=" + JSON.stringify(s1));
console.log("s1.getFullName()=" + s1.getFullName());
if (s1 instanceof Student)
    console.log("s1 is instanceof Student");
if (s1 instanceof Person)
    console.log("s1 is instanceof Person");
