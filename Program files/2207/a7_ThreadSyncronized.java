class Display {

    synchronized void show() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " : " + i);
        }
    }
}

class MyThread extends Thread {
    Display d;

    MyThread(Display d) {
        this.d = d;
    }

    public void run() {
        d.show();
    }
}

public class TestThread {
    public static void main(String[] args) {
        Display d = new Display();

        MyThread t1 = new MyThread(d);
        MyThread t2 = new MyThread(d);

        t1.setName("Thread-1");
        t2.setName("Thread-2");

        t1.start();
        t2.start();
    }
}