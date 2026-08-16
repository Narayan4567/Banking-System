package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerRepository repository;
    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        return repository.save(customer);
    }
    @GetMapping
    public List<Customer> getAllCustomers() {
        return repository.findAll();
    }
    @GetMapping("/{id}")
    public Customer getCustomer(@PathVariable Integer id) {
        return repository.findById(id).orElse(null);
    }
}