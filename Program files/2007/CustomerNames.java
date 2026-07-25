import java.util.Scanner;

public class CustomerNames {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] names = new String[5];

        System.out.println("Enter 5 customer names:");
        for (int i = 0; i < names.length; i++) {
            names[i] = sc.nextLine();
        }

        System.out.println("\nCustomer Names:");
        for (String name : names) {
            System.out.println(name);
        }

        sc.close();
    }
}