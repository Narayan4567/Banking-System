package com.example.gateway.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.util.List;
import java.util.Map;
@RestController
@RequestMapping("/dashboard")
public class DashboardController {
    @Autowired
    private RestTemplate restTemplate;
    @GetMapping("/{id}")
    public Map<String, Object> getDashboard(@PathVariable Long id) {
        System.out.println("Dashboard requested for account ID: " + id);
        // Call Account Service
        Double balance = restTemplate.getForObject(
                "http://localhost:8082/account/" + id + "/balance",
                Double.class);
        System.out.println("Received balance: " + balance);
        // Call Transaction Service
        List transactions = restTemplate.getForObject(
                "http://localhost:8083/transaction/" + id,
                List.class);
        System.out.println("Received transactions: " + transactions);
        // Aggregate response
        return Map.of(
                "accountId", id,
                "balance", balance,
                "transactions", transactions
        );
    }
}