package com.pfe.mslearning.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
@Document
public class Cour {
    @Transient
    public static final String SEQUENCE_NAME = "cour_sequence";
    @Id
    private long id;
    private  String nom;
    private long points;

    public Cour(long id, String nom, long points) {
        this.id = id;
        this.nom = nom;
        this.points = points;
    }
}
