package com.pfe.mspaiement.Entities;
import org.springframework.data.annotation.Transient;
import java.time.LocalTime;
import java.util.Date;
public class Paiment {
    @Transient
    public static final String SEQUENCE_NAME = "payment_sequence";
    private long id;
    private float montant;
    private LocalTime date;
    private niveau niveau;
    public com.pfe.mspaiement.Entities.niveau getNiveau() {
        return niveau;
    }

    public void setNiveau(com.pfe.mspaiement.Entities.niveau niveau) {
        this.niveau = niveau;
    }

    public Paiment(long id, float montant, LocalTime date) {
        this.id = id;
        this.montant = montant;
        this.date = date;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public float getMontant() {
        return montant;
    }

    public void setMontant(float montant) {
        this.montant = montant;
    }

    public LocalTime getDate() {
        return date;
    }

    public void setDate(LocalTime date) {
        this.date = date;
    }
}
