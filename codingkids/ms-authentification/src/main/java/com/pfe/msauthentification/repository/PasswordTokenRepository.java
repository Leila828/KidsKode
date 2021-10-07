package com.pfe.msauthentification.repository;

import com.pfe.msauthentification.entities.PasswordResetToken;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PasswordTokenRepository extends MongoRepository<PasswordResetToken,Long> {
    PasswordResetToken findByToken(String token);
}
