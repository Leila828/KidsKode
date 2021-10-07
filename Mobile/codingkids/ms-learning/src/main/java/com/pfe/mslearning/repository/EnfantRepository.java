package com.pfe.mslearning.repository;

import com.pfe.mslearning.Enfant;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

//@RepositoryRestResource

public interface EnfantRepository extends MongoRepository<Enfant, Long> {
    Enfant findById(long id);













}
