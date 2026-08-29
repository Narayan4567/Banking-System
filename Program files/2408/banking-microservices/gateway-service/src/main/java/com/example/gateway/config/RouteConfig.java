package com.example.gateway.config;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
@Configuration
public class RouteConfig {
    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("account_route", r -> r.path("/account/**")
                        .uri("http://localhost:8082"))
                .route("transaction_route", r -> r.path("/transaction/**")
                        .uri("http://localhost:8083"))
                .build();
    }
}