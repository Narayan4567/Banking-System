public class Test{
    public static void main(String[] args){

        MyThread m1 = new MyThread();
        m1.start();

        System.out.println("Mian Thread");
    }
}

class MyThread extends Thread{
    public void run(){
        System.out.println("child Thread");

    }
}