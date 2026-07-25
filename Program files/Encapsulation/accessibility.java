// Public

class Employee {
    public int age = 25;

    public void display() {
        System.out.println(age);
    }
}


public class Demo {
    public static void main(String[] args) {
        Employee e = new Employee();

        System.out.println(e.age);
        e.display();
    }
}






// // Private

// class Employee {

//     private int age = 25;

//     void display() {
//         System.out.println(age);
//     }
// }

// public class Demo {
//     public static void main(String[] args) {
//         Employee e = new Employee();

//         // e.age;      // ❌ Error
//         e.display();   // ✅ Works
//     }
// }




// // protected

// class Employee {

//     protected int age = 25;
// }

// class Manager extends Employee {

//     void show() {
//         System.out.println(age);
//     }
// }

// public class Demo {
//     public static void main(String[] args) {
//         Manager m = new Manager();
//         m.show();
//     }
// }