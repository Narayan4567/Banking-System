package com.example;
import java.util.Scanner;

public class a3_TestFails {
    
    String acc_number = "123";
    double balance;
    int min_balance;
    int amount;

    a3_TestFails(String acc_number, double balance){
        this.acc_number = acc_number;
        this.balance = balance;
    }

    public void deposit(double amount){
        balance += amount;
    }

    public double getBalance(){
        return balance;
    }
    

    public double withdraw(double amount){
        double amt = amount;
        if(amount > balance){
            throw new IllegalArgumentException("Insufficient balance");
        }

        balance -= amt;
        System.out.println("Withdraw Successful");
        return balance;
        

    }
}