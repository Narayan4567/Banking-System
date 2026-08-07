class Student{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    display(): void{
        console.log(this.name, this.age);
    }
}
let s1 = new Student("Narayan", 26);
s1.display();
