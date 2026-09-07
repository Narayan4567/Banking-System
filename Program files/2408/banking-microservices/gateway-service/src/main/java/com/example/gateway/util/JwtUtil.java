package com.example.gateway.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    private final String SECRET = "mySecretKey123";

    public Claims getClaims(String token) {

        return Jwts.parser()
                .setSigningKey(SECRET.getBytes())
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean validateToken(String token) {

        try {

            Claims claims = getClaims(token);

            return !claims.getExpiration()
                    .before(new Date());

        } catch (Exception e) {

            return false;
        }
    }
}