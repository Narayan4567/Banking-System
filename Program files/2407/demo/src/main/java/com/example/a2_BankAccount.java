package com.example;
import java.util.Scanner;

public class a2_BankAccount {
    String acc_number = "123";
    double balance;
    int min_balance;
    int amount;

    a2_BankAccount(String acc_number, double balance){
        Scanner sc = new Scanner(System.in);

        System.out.println("enter the acc number");
        String acc_num = sc.nextLine();

        if(acc_num == acc_number){
            System.out.println("enter the amount to deposit");
            double bal = sc.nextDouble();
            balance += bal;
        }
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

    // public int deposit(String acc_number,int amt){
    //     Scanner sc = new Scanner(System.in);

    //     System.out.println("enter the acc number");
    //     String acc_num = sc.nextLine();

    //     if(acc_num == acc_number){
    //         System.out.println("enter the amount");
    //         int dep_amount = amt;
    //         balance += amt;
    //     }else{
    //         throw new IllegalArgumentException("Wrong acc Num");
    //     }
}