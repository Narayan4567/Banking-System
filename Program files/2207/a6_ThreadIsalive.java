public class ThreadIsalive{
    public static void main(String[] args){
        MyThread[] threads = new MyThread[21];
        
        for(int i =1; i<=20;i++){
            threads[i] = new MyThread();
            threads[i].setName("Thread-" + (i + 1));
            threads[i].start();
            System.out.println(threads[i].isAlive());
            
        }       
    }
}



class MyThread extends Thread{
    public void run(){
        System.out.println(getName());
        Thread.dumpStack();
        
    }
}
