package com.pfe.msauthentification.repository;

import com.pfe.msauthentification.Model.Role;
import com.pfe.msauthentification.entities.Parent;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.core.parameters.P;

import java.util.List;

public interface ParentRepository extends MongoRepository<Parent, Long> {
    Parent findById(long id);
    List<Parent> findAll();
    Parent findByCompte_Email(String email);
}
