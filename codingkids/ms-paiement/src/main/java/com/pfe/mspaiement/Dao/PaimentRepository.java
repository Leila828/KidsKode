package com.pfe.mspaiement.Dao;

import com.pfe.mspaiement.Entities.Paiment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaimentRepository extends MongoRepository<Paiment, Long> {
}
