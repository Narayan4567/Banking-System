public class ThreadDelay{
    public static void main(String[] args){
        MyThread1 t1 = new MyThread1();
        t1.start();
        MyThread2 t2 = new MyThread2();
        t2.start();
        MyThread3 t3 = new MyThread3();
        t3.start();

        System.out.println("Main Thread");
    }
}



class MyThread1 extends Thread{
    public void run(){
        System.out.println("Good Morning");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
class MyThread2 extends Thread{
    public void run(){
        System.out.println("Good Afternoon");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
class MyThread3 extends Thread{
    public void run(){
        System.out.println("Good Evening");
        // Thread.sleep(2000);
    }
}
