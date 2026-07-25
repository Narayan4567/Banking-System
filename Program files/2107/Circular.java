public class CircularLinkedList {
    public static void main(String[] args) {

        Node head = new Node(10);

        head.next = new Node(20);
        head.next.next = new Node(30);
        head.next.next.next = new Node(40);

        // Make it circular
        head.next.next.next.next = head;

        Node temp = head;

        do {
            System.out.println(temp.data);
            temp = temp.next;
        } while (temp != head);
    }
}


class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        next = null;
    }
}