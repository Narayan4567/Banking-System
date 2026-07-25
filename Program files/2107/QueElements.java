import java.util.Queue;
import java.util.ArrayDeque;

public class Que{
    public static void main(String[] args){
        Queue<Integer> que = new ArrayDeque<>();


        que.add(10);
        que.add(20);
        que.add(30);
        System.out.println(que);
    }
}