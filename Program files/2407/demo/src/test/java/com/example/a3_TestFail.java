package com.example;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class a3_TestFail {

   @Test
   void testDepositFail() {
       a3_TestFails account = new a3_TestFails("123", 500.0);
       account.deposit(200.0);
       //fails
       assertEquals(800.0, account.getBalance(), "Expected 800 but got " + account.getBalance());
   }


   @Test
   void testWithdrawFail() {
       a3_TestFails account = new a3_TestFails("123", 500.0);
       account.withdraw(200.0);
       //fails
       assertEquals(400.0, account.getBalance(), "Expected 400 but got " + account.getBalance());
   }


   @Test
   void testExceptionFail() {
       a3_TestFails account = new a3_TestFails("123", 100.0);
       //fails
       assertThrows(IllegalArgumentException.class, () -> account.withdraw(50));
   }
}
