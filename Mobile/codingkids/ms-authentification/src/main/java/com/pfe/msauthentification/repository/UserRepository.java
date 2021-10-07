package com.pfe.msauthentification.repository;

import com.pfe.msauthentification.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User,Long> {
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
    User findByResetPasswordToken(String token);
   User findByEmail(String email);
   List<User> findByRolesLikeOrRolesLike(String ROLE_CHILD, String ROLE_PARENT);
   @Query("SELECT * from enfants where _id = '1'")
   List<User> getUsersByRoles();


}
