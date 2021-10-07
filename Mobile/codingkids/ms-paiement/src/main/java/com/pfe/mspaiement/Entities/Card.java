package com.pfe.mspaiement.Entities;

import org.springframework.data.annotation.Transient;

public class Card {
    @Transient
    public static final String SEQUENCE_NAME = "card_sequence";
    private long id;
    private  String expmonth;
    private  String expyear;
   private   String type;
   private   String cvc;

    public Card() {
    }

    public Card(long id, String expmonth, String expyear, String type, String cvc) {
        this.id = id;
        this.expmonth = expmonth;
        this.expyear = expyear;
        this.type = type;
        this.cvc = cvc;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getExpmonth() {
        return expmonth;
    }

    public void setExpmonth(String expmonth) {
        this.expmonth = expmonth;
    }

    public String getExpyear() {
        return expyear;
    }

    public void setExpyear(String expyear) {
        this.expyear = expyear;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCvc() {
        return cvc;
    }

    public void setCvc(String cvc) {
        this.cvc = cvc;
    }
}
