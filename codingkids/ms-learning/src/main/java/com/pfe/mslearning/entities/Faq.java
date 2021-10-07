package com.pfe.mslearning.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Faq {
    @Transient
    public static final String SEQUENCE_NAME = "faq_sequence";
    @Id
    private long id;
    private String question;
    private String answer;
private String level;

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Faq(long id, String question, String answer,String level) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.level=level;
    }
}
