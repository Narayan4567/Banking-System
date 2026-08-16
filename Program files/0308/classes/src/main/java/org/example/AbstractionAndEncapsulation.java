package org.example;

public class AbstractionAndEncapsulation {
    public static void main(String[] args) {

        // Abstraction
        Vehicle v = new Car();
        v.start();

        // Encapsulation
        Employee emp = new Employee();
        emp.setName("Narayana");
        System.out.println("Employee Name: " + emp.getName());
    }
}

// Encapsulation example
class Employee {
    private String name; // private data member
    // Setter method
    public void setName(String name) {
        this.name = name;
    }
    // Getter method
    public String getName() {
        return name;
    }
}

abstract class Vehicle {
    abstract void start(); // abstract method
}

// Concrete class implementing abstraction
class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car starts with a key.");
    }
}