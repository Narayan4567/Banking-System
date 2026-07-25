import java.util.Scanner;

public class LoginDoWhile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String loginId, password;

        do {
            System.out.print("Enter Login ID: ");
            loginId = sc.next();

            System.out.print("Enter Password: ");
            password = sc.next();

            if (loginId.equals("Prasunamba") && password.equals("4321")) {
                System.out.println("Welcome!");
            } else {
                System.out.println("Invalid Login ID or Password. Try Again.");
            }

        } while (!loginId.equals("Prasunamba") || !password.equals("4321"));

        sc.close();
    }
}