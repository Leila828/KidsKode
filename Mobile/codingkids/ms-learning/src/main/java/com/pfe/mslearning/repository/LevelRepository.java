package com.pfe.mslearning.repository;

import com.pfe.mslearning.Enfant;
import com.pfe.mslearning.entities.level;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource

public interface LevelRepository extends MongoRepository<level, Long> {
}
