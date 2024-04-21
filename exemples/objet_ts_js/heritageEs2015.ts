class Person{
     constructor(public firstName  : string = "unknown", 
                public lastName : string = "unknown") {
                }

    static comment : string  = "person";

    getFullName() : string{
        return this.firstName + " " + this.lastName;
    }
};


let p1 = new Person("axelle" , "Aire");
console.log("p1="+JSON.stringify(p1));
//console.log("p1.comment="+p1.comment);//person


class Student extends Person {
    constructor(firstName  : string = "unknown", 
                 lastName : string = "unknown",
                 public schoolName : string = "unknown",
                 public grade : number = 0) {
                        super(firstName,lastName);
    }
    
}



let s1 = new Student("jean" , "Bon" , "SchoolA" , 4);
console.log("s1="+JSON.stringify(s1));

console.log("s1.getFullName()="+s1.getFullName());
if(s1 instanceof Student) console.log("s1 is instanceof Student");
if(s1 instanceof Person) console.log("s1 is instanceof Person");