package com.pfe.msauthentification.entities;

import com.pfe.msauthentification.Model.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import java.util.Date;

public class PasswordResetToken {
    private static final int EXPIRATION = 60 * 24;
    @Transient
    public static final String SEQUENCE_NAME = "resetpassword_sequence";
    @Id
    private Long id;

    private String token;


    private User user;

    private Date expiryDate;

    public static int getEXPIRATION() {
        return EXPIRATION;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public PasswordResetToken(long id,String token, User user) {
        this.id=id;
        this.token = token;
        this.user = user;
    }
}
