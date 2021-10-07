package com.pfe.mslearning.repository;

import com.pfe.mslearning.Enfant;
import com.pfe.mslearning.entities.Faq;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface FaqRepository  extends MongoRepository<Faq, Long> {
    List<Faq> findAllByLevelEquals(String level);


}
