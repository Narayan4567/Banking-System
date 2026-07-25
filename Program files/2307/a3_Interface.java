
@FunctionalInterface
interface Compute{
    int multiply(int a, int b);
    // or
    abstract int multiply(int a, int b);
    // or
    public abstract int multiply(int a, int b);




    default void display1(){
        System.out.println("calculator");
    }
    default void display2(){
        System.out.println("Calculating.....");
    }
    default void display3(){
        System.out.println("Calculated");
    }
}


public class a3_Interface{
    public static void main(String[] args){
        
        Compute operation = (int a, int b) -> a*b;
        operation.display1();
        System.out.println(operation.multiply(10,10));
        operation.display2();
        operation.display3();


        
    }
}