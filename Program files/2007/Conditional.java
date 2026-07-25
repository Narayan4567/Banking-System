public class Conditional {

    public static void main(String[] args) {
        int age = 20;
        int marks = 75;

        // if
        if (age >= 18)
            System.out.println("Eligible to vote");

        // else if
        if (marks >= 90)
            System.out.println("Grade A");
        else if (marks >= 60)
            System.out.println("Grade B");
        else
            System.out.println("Grade C");

        // Nested if
        if (age >= 18) {
            if (marks >= 60)
                System.out.println("Eligible for interview");
        }
    }
}