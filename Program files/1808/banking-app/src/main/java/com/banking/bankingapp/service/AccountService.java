package com.banking.bankingapp.service;
import com.banking.bankingapp.entity.Account;
import com.banking.bankingapp.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;
    // Create Account
    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }
    // Cache-Aside: First call hits DB, result stored in Redis
    @Cacheable(value = "accounts", key = "#accountId")
    public Account getAccountDetails(Long accountId) {  // ✅ This method was missing!
        System.out.println("🔍 Fetching from DATABASE for ID: " + accountId);
        return accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found with ID: " + accountId));
    }
    // Write-Through: Updates DB and Redis simultaneously
    @CachePut(value = "accounts", key = "#account.id")
    public Account updateAccount(Account account) {
        System.out.println("✏️ Updating account in DB and Cache");
        return accountRepository.save(account);
    }
    // Cache Evict: Removes entry from Redis when deleted
    @CacheEvict(value = "accounts", key = "#accountId")
    public void deleteAccount(Long accountId) {
        System.out.println("🗑️ Deleting account from DB and Cache");
        accountRepository.deleteById(accountId);
    }
}