package com.example;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class a1_CalculatorTest {
    @Test
   void testAddition() {
       a1_Calculator calc = new a1_Calculator();
       assertEquals(15, calc.add(10, 5));
   }
//    @Test
//    void testAdditionFail() {
//        a1_Calculator calc = new a1_Calculator();
//        //fails
//        assertEquals(20, calc.add(10, 5), "Expected 20 but actual is 15");
//    }
}
