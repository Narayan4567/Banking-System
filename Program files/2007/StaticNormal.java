public class StaticNormal {
    
    static int staticVar = 0;
    int normalVar = 0;

    void increment() {
        staticVar++;
        normalVar++;

        System.out.println("Static Variable = " + staticVar);
        System.out.println("Normal Variable = " + normalVar);
    }

    public static void main(String[] args) {
        StaticDemo obj1 = new StaticDemo();
        StaticDemo obj2 = new StaticDemo();

        obj1.increment();
        obj2.increment();
    }

}
