// Public

public class Demo {
    public static void main(String[] args) {
        Employee e = new Employee();

        System.out.println(e.age);
        e.display();

        Person s = new Person();
        s.display1();

        Hr h = new Hr();
        h.display2();
    }
}

class Employee extends Person{
    public int age = 25;

    public void display() {
        System.out.println(age);
    }
}


class Person extends Hr{
    public int sal = 25000;

    public void display1() {
        System.out.println(sal);
    }
}
class Hr {
    public String name = "Narayan";

    public void display2() {
        System.out.println(name);
    }
}

