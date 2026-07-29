package com.example;


public class App {
    public static void main(String[] args) {
        
        PaymentService p1 = new PaymentService();

        OrderService o1 = new OrderService(p1);
        o1.OrderService(p1);

    }
}
