package com.bank.account_service.consumer;
import com.bank.account_service.model.Transaction;
import com.bank.account_service.service.AccountService;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;
@Component
public class KafkaTransactionConsumer {
    private final AccountService accountService;
    public KafkaTransactionConsumer(AccountService accountService) {
        this.accountService = accountService;
    }
    @KafkaListener(topics = "transactions", groupId = "account-service")
    public void consume(String message) {
        System.out.println("\n📨 [KAFKA] Received message: " + message);
        try {
            // Parse the message (simple parsing - in production use JSON)
            Transaction tx = parseTransaction(message);
            accountService.processTransaction(tx);
        } catch (Exception e) {
            System.err.println("❌ Error processing Kafka message: " + e.getMessage());
        }
    }
    private Transaction parseTransaction(String message) {
        // Simple parser for "Transaction{id=1, userId='101', amount=500.0, type='DEBIT'}"
        Transaction tx = new Transaction();
        String[] parts = message.replace("Transaction{", "").replace("}", "").split(", ");
        for (String part : parts) {
            String[] keyValue = part.split("=");
            if (keyValue.length == 2) {
                String key = keyValue[0].trim();
                String value = keyValue[1].trim().replace("'", "");
                switch (key) {
                    case "id":
                        tx.setId(Long.parseLong(value));
                        break;
                    case "userId":
                        tx.setUserId(value);
                        break;
                    case "amount":
                        tx.setAmount(Double.parseDouble(value));
                        break;
                    case "type":
                        tx.setType(value);
                        break;
                }
            }
        }
        return tx;
    }
}