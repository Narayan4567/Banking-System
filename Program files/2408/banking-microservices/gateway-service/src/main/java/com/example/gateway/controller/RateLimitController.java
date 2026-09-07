package com.example.gateway.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
@RestController
public class RateLimitController {
    @GetMapping("/rate-limit-error")
    public ResponseEntity<Map<String, Object>> rateLimitError() {
        return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                .body(Map.of(
                        "error", "Too Many Requests",
                        "message", "You have exceeded the allowed request limit. Please try again later.",
                        "status", 429
                ));
    }
}