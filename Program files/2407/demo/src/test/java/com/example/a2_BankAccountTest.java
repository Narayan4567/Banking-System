package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;


public class a2_BankAccountTest {
    @Test
   void testWithdrawInsufficientFunds() {
       a2_BankAccount account = new a2_BankAccount("123", 100.0);


       Exception ex = assertThrows(IllegalArgumentException.class, () -> {
           account.withdraw(200.0);
       });


       assertEquals("Insufficient balance", ex.getMessage());
   }

}
