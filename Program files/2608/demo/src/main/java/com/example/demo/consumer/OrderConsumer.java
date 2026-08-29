package com.example.demo.consumer;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;
@Component
public class OrderConsumer {
    @RabbitListener(queues = "orderQueue")
    public void receiveOrder(String order) {
        System.out.println("Received: " + order);
    }
}