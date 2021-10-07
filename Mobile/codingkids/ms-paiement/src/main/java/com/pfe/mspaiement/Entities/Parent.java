package com.pfe.mspaiement.Entities;

import com.pfe.mspaiement.Model.USER;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "parent_payment")

public class Parent {
    private  long id;
    private String token;
    private long amount;
    private List<Paiment> paiments;
    private List<Card> cards;


    @Transient
    USER User;

    public USER getUser() {
        return User;
    }

    public void setUser(USER user) {
        User = user;
    }

    public List<Card> getCards() {
        return cards;
    }

    public void setCards(List<Card> cards) {
        this.cards = cards;
    }

    public List<Paiment> getPaiments() {
        return paiments;
    }

    public void setPaiments(List<Paiment> paiments) {
        this.paiments = paiments;
    }

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
