package com.pfe.msauthentification.repository;

import com.pfe.msauthentification.Model.ERole;
import com.pfe.msauthentification.Model.ERole;
import com.pfe.msauthentification.Model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);


}
