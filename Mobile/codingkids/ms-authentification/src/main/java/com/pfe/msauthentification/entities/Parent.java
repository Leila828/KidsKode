package com.pfe.msauthentification.entities;

import com.pfe.msauthentification.Model.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class Parent {
    @Transient
    public static final String SEQUENCE_NAME = "parents_sequence";
    @Id
    private long id;
    private User compte;
    private   Enfant enfant;

    public Parent(long id, User compte, Enfant enfant) {
        this.id=id;
        this.compte = compte;
        this.enfant = enfant;
    }

    public long getId() {
        return id;
    }

    public User getCompte() {
        return compte;
    }

    public Enfant getEnfant() {
        return enfant;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setCompte(User compte) {
        this.compte = compte;
    }

    public void setEnfant(Enfant enfant) {
        this.enfant = enfant;
    }
}
