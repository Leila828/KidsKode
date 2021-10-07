package com.pfe.mspaiement.Dao;

import com.pfe.mspaiement.Entities.niveau;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface niveauRepository extends MongoRepository<niveau, Long> {
}
