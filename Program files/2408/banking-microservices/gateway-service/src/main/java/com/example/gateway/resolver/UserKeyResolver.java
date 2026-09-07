package com.example.gateway.resolver;
import org.springframework.cloud.gateway.filter.ratelimit.KeyResolver;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;
@Component
public class UserKeyResolver implements KeyResolver {
    @Override
    public Mono<String> resolve(ServerWebExchange exchange) {
        // Use JWT token if available, else fallback to client IP
        String authHeader = exchange.getRequest().getHeaders().getFirst("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            System.out.println("Rate limiting by token: " + authHeader);
            return Mono.just(authHeader); // identify by token
        }
        // Fallback to IP address
        String clientIp = exchange.getRequest().getRemoteAddress().getAddress().getHostAddress();
        System.out.println("Rate limiting by IP: " + clientIp);
        return Mono.just(clientIp);
    }
}