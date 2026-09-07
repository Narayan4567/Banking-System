package com.example.account.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class AccountController {

    @GetMapping("/{id}/balance")
    public Double getBalance(
            @PathVariable Long id,
            @RequestHeader("X-User-Id") String user,
            @RequestHeader("X-User-Role") String role) {

        System.out.println("User = " + user);

        System.out.println("Role = " + role);

        return 5000.75;
    }
}