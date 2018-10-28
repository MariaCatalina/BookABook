package com.example.spring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Integer userID;

    private String title;

    private String author;
    private String language;
    private String disponibility;
    private String description;

    private Integer numberExemplars;

    public Book(){

    }


    public Book(Integer userID, String title, String author, String language, String disponibility, String description,Integer numberExemplars) {
        this.userID = userID;
        this.title = title;
        this.author = author;
        this.language = language;
        this.disponibility = disponibility;
        this.description = description;
        this.numberExemplars = numberExemplars;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getDisponibility() {
        return disponibility;
    }

    public void setDisponibility(String disponibility) {
        this.disponibility = disponibility;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public Integer getNumberExemplars() {
        return numberExemplars;
    }

    public void setNumberExemplars(Integer numberExemplars) {
        this.numberExemplars = numberExemplars;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", userID=" + userID +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", language='" + language + '\'' +
                ", disponibility='" + disponibility + '\'' +
                ", description='" + description + '\'' +
                ", numberExemplars=" + numberExemplars +
                '}';
    }
}
