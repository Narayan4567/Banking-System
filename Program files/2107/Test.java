public class TestThread{
    public static void main(String[] args){
        MyThread t = new MyThread();
        t.start();

        System.out.println("Main Thread");
    }
}



class MyThread extends Thread{
    public void run(){
        System.out.println("Child thread");
    }
}


