package com.pfe.mslearning;

import com.pfe.mslearning.entities.level;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "enfants_learning")

public class Enfant {

    @Transient
    public static final String SEQUENCE_NAME = "enfants_sequence";
    @Id
    private long id;
    private String nom;
    private long points;
    private long points2;
    private long   points_sequencing_blockly;
    private long  points_loop_blockly;
    private long  points_condition_blockly;

    public long getPoints_sequencing_blockly() {
        return points_sequencing_blockly;
    }

    public void setPoints_sequencing_blockly(long points_sequencing_blockly) {
        this.points_sequencing_blockly = points_sequencing_blockly;
    }

    public long getPoints_loop_blockly() {
        return points_loop_blockly;
    }

    public void setPoints_loop_blockly(long points_loop_blockly) {
        this.points_loop_blockly = points_loop_blockly;
    }

    public long getPoints_condition_blockly() {
        return points_condition_blockly;
    }

    public void setPoints_condition_blockly(long points_condition_blockly) {
        this.points_condition_blockly = points_condition_blockly;
    }

    private List<level> levels;

    public List<level> getLevels() {
        return levels;
    }

    public void setLevels(List<level> levels) {
        this.levels = levels;
    }

    public long getPoints2() {
        return points2;
    }

    public void setPoints2(long points2) {
        this.points2 = points2;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public long getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }


    public Enfant(long id, String nom, long points, long points2,long points_sequencing_blockly,long points_loop_blockly,long points_condition_blockly) {
        this.id = id;
        this.nom = nom;
        this.points = points;
        this.points2=points2;
        this.points_sequencing_blockly=points_sequencing_blockly;
        this.points_loop_blockly=points_loop_blockly;
        this.points_condition_blockly=points_condition_blockly;




    }
}
