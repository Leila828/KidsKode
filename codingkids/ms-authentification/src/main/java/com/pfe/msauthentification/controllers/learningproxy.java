package com.pfe.msauthentification.controllers;

import com.pfe.msauthentification.Model.EnfantLearning;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-learning",url = "localhost:8882")
public interface learningproxy {
    @GetMapping("/enfants/{id}")
    EnfantLearning getenfant(@PathVariable("id") Long id);
}
