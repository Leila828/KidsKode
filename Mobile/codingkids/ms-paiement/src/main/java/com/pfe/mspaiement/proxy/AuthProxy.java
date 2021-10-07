package com.pfe.mspaiement.proxy;

import com.pfe.mspaiement.Model.USER;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "ms-authentification",url = "localhost:8881")

public interface AuthProxy {
    @GetMapping("/users/{id}")
    USER getpayment(@PathVariable("id")Long id);

    @GetMapping("/users")
    List<USER> getpayments();
}
