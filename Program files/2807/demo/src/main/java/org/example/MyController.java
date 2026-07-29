package org.example.myapp;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
@RequestMapping("/api/usersApi")
public class MyController {
    private List<String> users =
            List.of("Prasunamba", "Meher", "Kom");
    @GetMapping
    public List<String> getUsers() {
        // Returns JSON response
        return users;
    }
}