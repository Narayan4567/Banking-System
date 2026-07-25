public class Thread3{
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
    }
}
class MyThread2 extends Thread{
    public void run(){
        System.out.println("Good Afternoon");
    }
}
class MyThread3 extends Thread{
    public void run(){
        System.out.println("Good Evening");
    }
}


