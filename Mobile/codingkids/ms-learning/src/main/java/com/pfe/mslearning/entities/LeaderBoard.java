package com.pfe.mslearning.entities;

import com.pfe.mslearning.Enfant;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document

public class LeaderBoard {
    @Transient
    public static final String SEQUENCE_NAME = "leaderboard_sequence";
    @Id
    private long id;
   private List<Enfant> enfantList;

}
