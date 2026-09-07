package com.bank.account_service.config;
import org.springframework.amqp.core.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
@Configuration
public class RabbitMQConfig {
    @Bean
    public TopicExchange transactionExchange() {
        return new TopicExchange("transaction-exchange");
    }
    @Bean
    public Queue transactionQueue() {
        return new Queue("transaction-queue", true);
    }
    @Bean
    public Binding binding(Queue transactionQueue, TopicExchange transactionExchange) {
        return BindingBuilder.bind(transactionQueue).to(transactionExchange).with("transaction.key");
    }
}