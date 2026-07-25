// -ea - enable assertion
// steps:

// javac Test.java
// java Test
// java -ea Test
// java -da Test

class Test{
    public static void main(String[] args){
        int age = 17;
        assert age >= 18 : " can vote";
        System.out.println("U"+ age);
    }
}