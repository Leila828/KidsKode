package com.pfe.mslearning.entities;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "parent_payment")

public class Parent {
    private  long id;
    private String token;
    private long amount;

    public Parent() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token= token;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public Parent(long id, String token, long amount) {
        this.id = id;
        this.token = token;
        this.amount = amount;
    }
}
