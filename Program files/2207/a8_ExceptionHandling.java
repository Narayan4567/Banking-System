// java a8_ExceptionHandling.java

public class ExceptionHandling {
    public static void main(String[] args) {

        try {

            int[] arr = {1, 2, 3};
            System.out.println(arr[4]);
            int x = 10 / 0;

        }
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Invalid array index");
        }
        catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
        finally {
            System.out.println("End of program");
        }

        System.out.println("Program in progress");
    }
}