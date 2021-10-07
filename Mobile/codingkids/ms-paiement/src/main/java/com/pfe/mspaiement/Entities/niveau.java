package com.pfe.mspaiement.Entities;

import org.springframework.data.annotation.Transient;

public class niveau {
    @Transient
    public static final String SEQUENCE_NAME = "niveau_sequence";
    private long id;
    private float price;
    private String name;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public niveau(long id, float price, String name) {
        this.id = id;
        this.price = price;
        this.name = name;
    }
}


