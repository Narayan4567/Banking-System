package com.example.transaction.controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @GetMapping("/all")
    public String getAllTransactions(
            @RequestHeader("X-User-Role") String role) {

        if (!role.equals("ADMIN")) {
            return "403 FORBIDDEN";
        }

        return "All Transactions";
    }
}