package com.pfe.msauthentification.repository;

import com.pfe.msauthentification.entities.Enfant;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface EnfantRepository extends MongoRepository<Enfant, Long> {
Optional<Enfant> findById(Long id);
Enfant findByCompte_Id(Long id);
}
