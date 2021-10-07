package com.pfe.mslearning.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "level")

public class level {

    @Transient
    public static final String SEQUENCE_NAME = "level_sequence";
    @Id
    private long id;
    private String nom;
    private String badge;
    private List<Cour> cours;

    public long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getBadge() {
        return badge;
    }

    public List<Cour> getCours() {
        return cours;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setBadge(String badge) {
        this.badge = badge;
    }

    public void setCours(List<Cour> cours) {
        this.cours = cours;
    }

    public level(long id, String nom, String badge) {
        this.id = id;
        this.nom = nom;
        this.badge = badge;
    }
}
