// function sum(a: number, b: number){
//     return a+b;
// }

// console.log(sum(10, 20));



// function greet(msg: String): String{
//     return msg;
// }

// console.log(greet("message"));



// interface User {
//   name: string;
//   age?: number;
//   greet(): void;
// }

// const user: User = {
//   name: "John",
//   age: 25,
//   greet() {
//     console.log("Hello");
//   }
// };
// const user1: User = {
//   name: "John",
//   greet() {
//     console.log("Hello");
//   }
// };

// console.log(user);
// console.log(user1);
// console.log(user.greet());
// console.log(user.greet());



// class Student{
//     constructor(){
//         console.log("ahkhkds");
//     }
// }
// const s1 = new Student();




// class Student{
//     name: String = "Narayana";
//     constructor(){
//         console.log("constructor");
//     }
// }

// const s1 = new Student();
// console.log(s1.name);




// class Student {
//     name: string;
//     age: number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }
// const s1 = new Student("narayan", 26);
// console.log(s1);



// class Student{
//     constructor(public name: string, public age: number){}
// }
// const s1 = new Student("Narayan", 26);

// console.log(s1.name);




// class Student {
//     constructor(
//         public name: string = "Unknown",
//         public age: number = 18
//     ) {}
// }

// const s1 = new Student();

// console.log(s1.name);
// console.log(s1.age);



// Access modifiers

console.log("Program Started");

class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public display(): void {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}

const e1 = new Employee("Narayan", 1000000, "CSE");
e1.display();