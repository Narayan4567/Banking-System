
public class LamInterface{
    public static void main(String[] args){
        
        Add obj1= (a,b) -> System.out.println("sum="+(a+b));
        obj1.methods(21,29);
        Add obj2= (a,b) -> System.out.println("Mul="+(a*b));
        obj2.methods(21,290);
    }
}

interface Operads{
    void methods(int a, int b);
}



