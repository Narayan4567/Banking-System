class Employee {

    int age = 10;

    void display() {
        System.out.println("Employee class");
    }

    public static void main(String[] args) {
        Manager m = new Manager();

        m.display();
        m.showAge();
    }
}

class Manager extends Employee {

    void showAge() {
        System.out.println(age);
    }
}
