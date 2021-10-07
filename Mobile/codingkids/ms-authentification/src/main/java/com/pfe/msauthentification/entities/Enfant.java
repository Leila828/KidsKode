package com.pfe.msauthentification.entities;

import com.pfe.msauthentification.Model.EnfantLearning;
import com.pfe.msauthentification.Model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "enfants")
@Data

@NoArgsConstructor

public class Enfant {
    @Transient
    public static final String SEQUENCE_NAME = "enfants_sequence";
    @Id
    private long id;
    private User compte;
    private long age;
    private String experience;
    @Transient
    EnfantLearning enfantLearning;
    public void setEnfantLearning(EnfantLearning enfantLearning) {
        this.enfantLearning = enfantLearning;
    }



    public Enfant( long id,User compte, long age, String experience,EnfantLearning enfantLearning) {
        this.id = id;
        this.compte = compte;
        this.age = age;
        this.experience = experience;
        this.enfantLearning=enfantLearning;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getCompte() {
        return compte;
    }

    public void setCompte(User compte) {
        this.compte = compte;
    }

    public long getAge() {
        return age;
    }

    public void setAge(long age) {
        this.age = age;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }
}
