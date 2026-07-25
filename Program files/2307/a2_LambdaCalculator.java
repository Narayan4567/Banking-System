@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

public class a2_LambdaCalculator {
    public static void main(String[] args) {

        Calculator add = (a, b) -> a + b;
        Calculator sub = (a, b) -> a - b;
        Calculator mul = (a, b) -> a * b;
        Calculator div = (a, b) -> a / b;

        int x = 20;
        int y = 10;

        System.out.println("Addition: " + add.calculate(x, y));
        System.out.println("Subtraction: " + sub.calculate(x, y));
        System.out.println("Multiplication: " + mul.calculate(x, y));
        System.out.println("Division: " + div.calculate(x, y));
    }
}