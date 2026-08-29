package com.bank.account_service.consumer;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;
@Component
public class PaymentEventConsumer {
    @KafkaListener(topics = "payments", groupId = "account-service-payment")
    public void handlePaymentEvent(String message) {
        System.out.println("\n🔔 [ACCOUNT SERVICE] Payment event received: " + message);
        if (message.startsWith("PaymentCompleted")) {
            System.out.println("✅ Payment successful - Finalizing account debit");
            System.out.println("📝 Transaction committed in database");
            // In real implementation: mark transaction as completed
        } else if (message.startsWith("PaymentFailed")) {
            System.out.println("❌ Payment failed - Rolling back transaction");
            System.out.println("🔄 Compensating action: Restoring account balance");
            // In real implementation: reverse the debit, restore balance
        }
    }
}