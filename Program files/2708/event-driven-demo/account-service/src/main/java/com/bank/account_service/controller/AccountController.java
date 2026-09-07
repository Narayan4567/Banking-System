package com.bank.account_service.controller;
import com.bank.account_service.model.Account;
import com.bank.account_service.service.AccountService;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/account")
public class AccountController {
    private final AccountService accountService;
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }
    @GetMapping("/{userId}")
    public Account getAccount(@PathVariable String userId) {
        Account account = accountService.getAccount(userId);
        if (account == null) {
            return new Account(userId, 0.0);
        }
        return account;
    }
}