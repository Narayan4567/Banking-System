package com.bank.account_service.model;
import java.io.Serializable;
public class Transaction implements Serializable {
    private Long id;
    private String userId;
    private Double amount;
    private String type;
    public Transaction() {}
    public Transaction(Long id, String userId, Double amount, String type) {
        this.id = id;
        this.userId = userId;
        this.amount = amount;
        this.type = type;
    }
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }
    public Double getAmount() { return amount; }
    public void setAmount(Double amount) { this.amount = amount; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    @Override
    public String toString() {
        return "Transaction{id=" + id + ", userId='" + userId + "', amount=" + amount + ", type='" + type + "'}";
    }
}