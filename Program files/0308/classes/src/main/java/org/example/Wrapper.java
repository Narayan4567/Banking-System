package org.example;

public class Wrapper {
    public static void main(String[] args) {

        // Primitive data types
        int num = 100;
        double price = 99.99;

        // Autoboxing: Primitive to Wrapper Object
        Integer intObj = num;
        Double doubleObj = price;

        System.out.println("Integer Object: " + intObj);
        System.out.println("Double Object: " + doubleObj);

        // Unboxing: Wrapper Object to Primitive
        int newNum = intObj;
        double newPrice = doubleObj;

        System.out.println("Primitive int: " + newNum);
        System.out.println("Primitive double: " + newPrice);

        // Using Wrapper Class Methods
        String str = "123";
        int convertedNum = Integer.parseInt(str);

        System.out.println("String to int: " + convertedNum);

        System.out.println("Maximum Integer Value: " + Integer.MAX_VALUE);
        System.out.println("Minimum Integer Value: " + Integer.MIN_VALUE);
    }
}