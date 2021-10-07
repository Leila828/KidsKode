package com.pfe.mslearning.repository;


import com.pfe.mslearning.entities.Parent;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ParentRepository extends MongoRepository<Parent, Long> {
}
