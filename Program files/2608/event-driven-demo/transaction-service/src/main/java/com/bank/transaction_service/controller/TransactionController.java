package com.bank.transaction_service.controller;
import com.bank.transaction_service.model.Transaction;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/transaction")
public class TransactionController {
    private final KafkaTemplate<String, String> kafkaTemplate;
    private final RabbitTemplate rabbitTemplate;
    public TransactionController(KafkaTemplate<String, String> kafkaTemplate, RabbitTemplate rabbitTemplate) {
        this.kafkaTemplate = kafkaTemplate;
        this.rabbitTemplate = rabbitTemplate;
    }
    @PostMapping("/kafka")
    public String createTransactionKafka(@RequestBody Transaction tx) {
        System.out.println("Publishing to Kafka: " + tx);
        kafkaTemplate.send("transactions", tx.getUserId(), tx.toString());
        return "Transaction submitted via Kafka: " + tx.getId();
    }
    @PostMapping("/rabbitmq")
    public String createTransactionRabbit(@RequestBody Transaction tx) {
        System.out.println("Publishing to RabbitMQ: " + tx);
        rabbitTemplate.convertAndSend("transaction-exchange", "transaction.key", tx);
        return "Transaction submitted via RabbitMQ: " + tx.getId();
    }
    @PostMapping
    public String createTransaction(@RequestBody Transaction tx) {
        System.out.println("Publishing to both: " + tx);
        kafkaTemplate.send("transactions", tx.getUserId(), tx.toString());
        rabbitTemplate.convertAndSend("transaction-exchange", "transaction.key", tx);
        return "Transaction submitted to both: " + tx.getId();
    }
}