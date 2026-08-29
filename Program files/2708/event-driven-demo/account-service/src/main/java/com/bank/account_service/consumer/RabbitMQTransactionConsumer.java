package com.bank.account_service.consumer;
import com.bank.account_service.model.Transaction;
import com.bank.account_service.service.AccountService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;
@Component
public class RabbitMQTransactionConsumer {
    private final AccountService accountService;
    public RabbitMQTransactionConsumer(AccountService accountService) {
        this.accountService = accountService;
    }
    @RabbitListener(queues = "transaction-queue")
    public void receive(Transaction tx) {
        System.out.println("\n📬 [RABBITMQ] Received: " + tx);
        try {
            accountService.processTransaction(tx);
        } catch (Exception e) {
            System.err.println("❌ Error: " + e.getMessage());
        }
    }
}