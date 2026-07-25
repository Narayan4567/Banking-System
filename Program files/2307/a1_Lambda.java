import java.util.function.Supplier;


public class Lambda{
    
    public static void main(String[] args){
         Supplier<String> out = () -> "Welcome";
         System.out.println(out.get());
    }
}