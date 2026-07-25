public class OverRiding{
    public static void main(String[] args){

        Child a1 = new Child();
        
        a1.display(10, 20);

    }
}


class Parent{
    int a;
    int b;

    void display(int a, int b){
        System.out.println(a+" "+b);
    }
}

class Child extends Parent{
    int a;
    int b;

    void display(int a, int b){
        System.out.println(a+b);
}
}