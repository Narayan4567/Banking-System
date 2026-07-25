public class Polymorphism extends Child4{
    public static void main(String[] args){
        Polymorphism obj1 = new Polymorphism();

        obj1.display(10, 20, 30);
    }
}


class Child1{
    int a = 10;
    int b = 20;
    void display(int a,int b){
        System.out.println(a+""+b);
    }
}
class Child2 extends Child1{
    int a = 10;
    int b = 20;
    int c = 30;
    void display(int a,int b,int c){
        System.out.println(+a+""+b+""+c);
    }
}
class Child3 extends Child2{
    char a = 'a';
    int b = 8;
    void display(char a,char b){
        System.out.println("Child 3: " +a+""+b);
    }
}
class Child4 extends Child3{
    char a = 'a';
    int b = 8;
    void display(char b,char a){
        System.out.println("Child 4:" +b+""+a);
    }
}