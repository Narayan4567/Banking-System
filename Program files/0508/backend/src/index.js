"use strict";
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(this.name, this.age);
    }
}
let s1 = new Student("Narayan", 26);
s1.display();
