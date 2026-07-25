public class CustomLinkedList{
    public static void main(String[] args){
        Node a1 = new Node(232);
        Node a2 = new Node(348988);
        a1.next = a2;
        

        System.out.println();
        System.out.println(a1.data+"   "+a2.data);
    }
}

class Node{
    int data;
    Node next;
    Node(int data){
        this.data = data;
        this.next = null;
    }
}