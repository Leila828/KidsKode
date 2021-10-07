package com.pfe.msauthentification.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "roles")

public class Role {
    @Transient
    public static final String SEQUENCE_NAME = "roles_sequence";
    @Id
    private long id;

    private ERole name;

    public Role() {

    }

    public Role(long id,ERole name) {
        this.id=id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public ERole getName() {
        return name;
    }

    public void setName(ERole name) {
        this.name = name;
    }
}
