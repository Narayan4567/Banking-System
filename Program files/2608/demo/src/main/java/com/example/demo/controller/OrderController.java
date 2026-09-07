package com.example.demo.controller;
import com.example.demo.producer.OrderProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private OrderProducer producer;
    @GetMapping("/{msg}")
    public String send(@PathVariable String msg) {
        producer.sendOrder(msg);
        return "Message Sent: " + msg;
    }
    @PostMapping("/send")
    public String sendOrder(@RequestBody String order) {
        producer.sendOrder(order);
        return "Order Sent: " + order;
    }
}