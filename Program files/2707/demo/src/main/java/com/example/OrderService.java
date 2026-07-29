package com.example;

public class OrderService {
    private final PaymentService paymentservice;

    OrderService(PaymentService paymentservice){
        this.paymentservice = paymentservice;
    }
    
}
