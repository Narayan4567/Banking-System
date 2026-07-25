// java ass_doubly.java


public class Doubly{
    public static void main(String[] args){

        Node head = new Node(20);

        head.next = new Node(10);
        head.next.prev = head;

        head.next.next = new Node(30);
        head.next.next.prev = head.next;

        head.next.next.next = new Node(40);
        head.next.next.next.prev = head.next.next;



        Node temp = head;

        while(temp != null){
            System.out.println(temp.data);
            if(temp.next != null){
                System.out.println("-");
            }
            temp = temp.next;


        }

    }
}


class Node{
    int data;
    Node prev;
    Node next;

    Node(int data){
        this.data = data;
        prev = next = null;
    }
}





