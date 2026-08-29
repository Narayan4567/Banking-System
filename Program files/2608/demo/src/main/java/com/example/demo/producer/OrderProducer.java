package com.example.demo.producer;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderProducer {
    @Autowired
    private AmqpTemplate amqpTemplate;
    public void sendOrder(String order) {
        amqpTemplate.convertAndSend("orderExchange", "newOrder", order);
        System.out.println("Sent: " + order);
    }
}