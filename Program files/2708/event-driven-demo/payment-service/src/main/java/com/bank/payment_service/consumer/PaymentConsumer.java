package com.bank.payment_service.consumer;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;
import java.util.Random;
@Component
public class PaymentConsumer {
    private final KafkaTemplate<String, String> kafkaTemplate;
    private final Random random = new Random();
    public PaymentConsumer(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }
    @KafkaListener(topics = "transactions", groupId = "payment-service")
    public void processTransaction(String message) {
        System.out.println("\n💳 [PAYMENT SERVICE] Received transaction: " + message);
        try {
            Thread.sleep(1000); // Simulate processing delay
            boolean success = random.nextBoolean(); // 50% success rate
            if (success) {
                String paymentMessage = "PaymentCompleted:" + message;
                kafkaTemplate.send("payments", paymentMessage);
                System.out.println("✅ Payment COMPLETED for: " + message);
            } else {
                String paymentMessage = "PaymentFailed:" + message;
                kafkaTemplate.send("payments", paymentMessage);
                System.out.println("❌ Payment FAILED for: " + message);
            }
        } catch (Exception e) {
            System.err.println("❌ Error processing payment: " + e.getMessage());
        }
    }
}