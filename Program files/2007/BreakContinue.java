public class BreakContinue {
    public static void main(String[] args) {

        System.out.println("Using break:");
        for (int i = 1; i <= 5; i++) {
            if (i == 3)
                break;
            System.out.println(i);
        }

        System.out.println("\nUsing continue:");
        for (int i = 1; i <= 5; i++) {
            if (i == 3)
                continue;
            System.out.println(i);
        }
    }

}
