package com.banking.bankingapp.controller;
import com.banking.bankingapp.entity.Account;
import com.banking.bankingapp.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/account")  // ✅ This should be here
public class AccountController {
    @Autowired
    private AccountService accountService;
    // Create account
    @PostMapping  // ✅ Maps to POST /account
    public Account createAccount(@RequestBody Account account) {
        return accountService.createAccount(account);
    }
    // Get account by ID
    @GetMapping("/{id}")  // ✅ Maps to GET /account/{id}
    public Account getAccount(@PathVariable Long id) {
        return accountService.getAccountDetails(id);
    }
    // Update account
    @PostMapping("/update")  // ✅ Maps to POST /account/update
    public Account updateAccount(@RequestBody Account account) {
        return accountService.updateAccount(account);
    }
    // Delete account
    @DeleteMapping("/{id}")  // ✅ Maps to DELETE /account/{id}
    public String deleteAccount(@PathVariable Long id) {
        accountService.deleteAccount(id);
        return "Account deleted successfully";
    }
}