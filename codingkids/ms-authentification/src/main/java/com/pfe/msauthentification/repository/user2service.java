package com.pfe.msauthentification.repository;

import com.pfe.msauthentification.Model.User;
import com.pfe.msauthentification.entities.Enfant;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class user2service {
    private MongoTemplate mongoTemplate;
    public user2service(MongoTemplate mongoTemplate){
        this.mongoTemplate=mongoTemplate;
    }
    public List<Enfant> findAll(){

      Query   query= Query.query(Criteria.where("enfants.age").is("10"));

        return this.mongoTemplate.find(query, Enfant.class);
    }

   }
