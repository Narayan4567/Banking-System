package com.bank.account_service.service;
import com.bank.account_service.model.Account;
import com.bank.account_service.model.Transaction;
import com.bank.account_service.repository.AccountRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.HashSet;
import java.util.Set;
@Service
public class AccountService {
    private final AccountRepository accountRepository;
    // In-memory set to track processed transactions (Idempotency)
    private final Set<Long> processedTransactions = new HashSet<>();
    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }
    @Transactional
    public void processTransaction(Transaction tx) {
        // Idempotency Check
        if (processedTransactions.contains(tx.getId())) {
            System.out.println("⚠️ Transaction already processed (Idempotency): " + tx.getId());
            return;
        }
        System.out.println("✅ Processing new transaction: " + tx);
        // Find or create account
        Account account = accountRepository.findByUserId(tx.getUserId())
                .orElseGet(() -> {
                    Account newAccount = new Account(tx.getUserId(), 1000.0);
                    return accountRepository.save(newAccount);
                });
        System.out.println("📊 Current balance for user " + tx.getUserId() + ": " + account.getBalance());
        // Update balance based on transaction type
        if ("DEBIT".equalsIgnoreCase(tx.getType())) {
            if (account.getBalance() >= tx.getAmount()) {
                account.setBalance(account.getBalance() - tx.getAmount());
                System.out.println("💸 Debited: " + tx.getAmount());
            } else {
                System.out.println("❌ Insufficient balance for debit!");
                return;
            }
        } else if ("CREDIT".equalsIgnoreCase(tx.getType())) {
            account.setBalance(account.getBalance() + tx.getAmount());
            System.out.println("💰 Credited: " + tx.getAmount());
        }
        // Save updated account
        accountRepository.save(account);
        // Mark transaction as processed (Idempotency)
        processedTransactions.add(tx.getId());
        System.out.println("✅ New balance for user " + tx.getUserId() + ": " + account.getBalance());
    }
    public Account getAccount(String userId) {
        return accountRepository.findByUserId(userId)
                .orElse(null);
    }
}