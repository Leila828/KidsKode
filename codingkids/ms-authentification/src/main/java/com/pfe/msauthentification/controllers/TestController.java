package com.pfe.msauthentification.controllers;

import com.pfe.msauthentification.Model.User;
import com.pfe.msauthentification.entities.Enfant;
import com.pfe.msauthentification.entities.Parent;
import com.pfe.msauthentification.repository.EnfantRepository;
import com.pfe.msauthentification.repository.ParentRepository;
import com.pfe.msauthentification.repository.UserRepository;
import com.pfe.msauthentification.repository.user2service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")

public class TestController {

    @Autowired
    ParentRepository parentRepository;

    @Autowired
    learningproxy learningproxy;
    @Autowired
    UserRepository userRepository;
    @Autowired
    EnfantRepository enfantRepository;
    @GetMapping("/all")
    public String allAccess() {
        return "Public Content.";
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String userAccess() {
        return "User Content.";
    }

    @GetMapping("/mod")
    @PreAuthorize("hasRole('MODERATOR')")
    public String moderatorAccess() {
        return "Moderator Board.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin Board.";
    }
    @GetMapping("/parent")
    @PreAuthorize("hasRole('PARENT')")
    public String parentAccess() {
        return "Parent Board.";
    }
    @GetMapping("/child")
    @PreAuthorize("hasRole('CHILD')")
    public String childAccess() {
        return "ChildBoard.";
    }


    @GetMapping(path ={"/{email}"})
    public Parent getinfo(@PathVariable("email") String email)
    {
        Parent parent= parentRepository.findByCompte_Email(email);
        return parent;
    }

    @GetMapping("enfant/{email}")
    public Enfant getinfo_enfant(@PathVariable("email") String email)
    {
        Parent parent= parentRepository.findByCompte_Email(email);

        Optional<Enfant> enf=enfantRepository.findById(parent.getEnfant().getId());
        Enfant enfant=parent.getEnfant();

        //  System.out.println(enf);
        return enfant;
    }



    @GetMapping("/allparents")
    public List<Parent> list(){

        List<Parent> parents=parentRepository.findAll();
        return parents;
    }
    @GetMapping("/allchilds")
    public List<Enfant> listenf(){

        List<Enfant> enfants=enfantRepository.findAll();
        return enfants;
    }
    @GetMapping("/allnas")
    public List<User> listU(){


        List<User> user=  userRepository.findByRolesLikeOrRolesLike("ROLE_CHILD", "ROLE_PARENT");
        for(int i=0;i<user.size();i++){
            System.out.println(user.get(i));
        }

        return user;
    }

    @GetMapping("/enfantwithlearning/{id}")
    public   Enfant getEnfantwithlearning(@PathVariable("id")Long id){
        Enfant enfant_compte =enfantRepository.findByCompte_Id(id);
        System.out.println(enfant_compte);
//Enfant enfant=enfantRepository.findById(id);

        enfant_compte.setEnfantLearning(learningproxy.getenfant(id));
        System.out.println(enfant_compte);
        return enfant_compte;
    }

    @GetMapping("/allusers")
    public   List<User> getuser(){
        return userRepository.findAll();
    }
}
