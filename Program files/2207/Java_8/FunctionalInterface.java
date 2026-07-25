import java.util.function.Function;
import java.util.function.Predicate;

public class FuntionalInterface{
    public static void main(String[] args){
        Function<Integer, Float> out1 = num -> (float)num;
        System.out.println(out1.apply(10));

        Predicate<String> out2 = str -> str == "yes";
        System.out.println(out2.test("yes"));

        Supplier<String> supplier = () -> "Supplied value";
        System.out.println(supplier.get());
    }
}


// @FunctionalInterface
// interface Operations{
//     void methods(int num);
// }



