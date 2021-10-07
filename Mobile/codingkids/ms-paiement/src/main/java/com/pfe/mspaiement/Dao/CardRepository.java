package com.pfe.mspaiement.Dao;
import com.pfe.mspaiement.Entities.Card;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CardRepository extends MongoRepository<Card, Long> {
}
