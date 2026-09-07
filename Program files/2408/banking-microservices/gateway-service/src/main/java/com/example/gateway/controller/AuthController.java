package com.example.gateway.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/login")
    public Map<String, String> login(
            @RequestBody Map<String, String> user) {

        String role = "USER";

        if ("admin".equals(user.get("username"))) {
            role = "ADMIN";
        }

        String token = Jwts.builder()
                .setSubject(user.get("username"))
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(
                        new Date(
                                System.currentTimeMillis() + 3600000
                        )
                )
                .signWith(
                        SignatureAlgorithm.HS256,
                        "mySecretKey123".getBytes()
                )
                .compact();

        return Map.of("token", token);
    }
}