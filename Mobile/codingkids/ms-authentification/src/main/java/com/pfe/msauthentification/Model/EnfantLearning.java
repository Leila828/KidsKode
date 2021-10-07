package com.pfe.msauthentification.Model;

import com.mongodb.lang.Nullable;
import lombok.Data;

@Data

public class EnfantLearning {
    private String nom;
    private int points;
    private int points2;
    private long   points_sequencing_blockly;
    private long  points_loop_blockly;
    private long  points_condition_blockly;

}
