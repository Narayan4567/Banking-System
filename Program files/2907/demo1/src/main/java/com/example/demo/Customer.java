package com.example.demo;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Customer {
    @Id
    private Integer id;
    private String accountType;
    // Add this default constructor
    public Customer() {
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getAccountType() {
        return accountType;
    }
    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }
}