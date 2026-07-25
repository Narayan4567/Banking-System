import java.util.LinkedList;
import java.util.Deque;
import java.util.ArrayDeque;


public class LinkedListStack{
    public static void main(String[] args){

        Deque<Integer> nums = new ArrayDeque<>();

        Push(nums,10);
        Push(nums,20);
        Push(nums,30);


        System.out.println(nums);

        Pop(nums);
        Pop(nums);
        System.out.println(nums);


        }
        static void Push(Deque<Integer> nums, int a){
            nums.push(a);
        }
        static void Pop(Deque<Integer> nums){
            nums.pop();
        }
    }

