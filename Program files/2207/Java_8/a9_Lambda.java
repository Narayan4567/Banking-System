import java.util.*;
public class Lambda {
 public static void main(String[] args) {
 // Before Java 8
 Runnable r1 = new Runnable() {
 public void run() {
 System.out.println("Before: Hello!");
 }
 };
 // Lambda Expression
 Runnable r2 = () ->
 System.out.println("After: Hello!");

 // Lambda with parameters
 List<String> names =
 Arrays.asList("Alice", "Bob", "Charlie");
 names.forEach(name ->
 System.out.println("Name: " + name));

 r1.run();
 r2.run();
 }
}
