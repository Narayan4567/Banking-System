package org.example.myapp;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class Myapp {
    public static void main(String[] args) {
        // Embedded Tomcat starts automatically
        SpringApplication.run(Myapp.class, args);
    }
}