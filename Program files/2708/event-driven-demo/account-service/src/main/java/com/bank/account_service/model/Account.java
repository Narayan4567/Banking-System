package com.bank.account_service.model;
import jakarta.persistence.*;
@Entity
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true, nullable = false)
    private String userId;
    private Double balance;
    // Constructors
    public Account() {
        this.balance = 1000.0; // Default starting balance
    }
    public Account(String userId, Double balance) {
        this.userId = userId;
        this.balance = balance;
    }
    // Getters and Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public Double getBalance() {
        return balance;
    }
    public void setBalance(Double balance) {
        this.balance = balance;
    }
    @Override
    public String toString() {
        return "Account{id=" + id + ", userId='" + userId + "', balance=" + balance + '}';
    }
}