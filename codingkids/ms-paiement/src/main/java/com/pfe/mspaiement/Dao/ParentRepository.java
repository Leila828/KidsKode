package com.pfe.mspaiement.Dao;

import com.pfe.mspaiement.Entities.Parent;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ParentRepository extends MongoRepository<Parent, Long> {
        Parent findById(long id);
}
