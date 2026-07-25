import java.util.LinkedList;



public class LinkedListD{
    public static void main(String[] args){
        LinkedList<String> Names = new LinkedList<>();
        Names.add("Riya");
        Names.add("Priya");
        Names.add("Seeta");
        System.out.println(Names);
        Names.remove("Riya");
        System.out.println(Names);

    }
}