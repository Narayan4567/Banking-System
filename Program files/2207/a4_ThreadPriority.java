public class ThreadPriority{
    public static void main(String[] args){
        MyThread1 t1 = new MyThread1();
        t1.setName("morning");
        System.out.println(t1.getName());
        t1.setPriority(Thread.MAX_PRIORITY);
        t1.start();


        MyThread2 t2 = new MyThread2();
        t2.setName("Afternoon");
        System.out.println(t2.getName());
        t2.setPriority(Thread.NORM_PRIORITY);
        t2.start();


        MyThread3 t3 = new MyThread3();
        t3.setName("Evening");
        System.out.println(t3.getName());
        t3.setPriority(Thread.MIN_PRIORITY);
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
        try {
            Thread.sleep(0);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
