package com.example.spring.frontendmodel;

public class BookReturned {
    private String title;
    private String author;
    private Integer bookID;
    private String user;

    public  BookReturned(){

    }

    public BookReturned(String title, String author, Integer bookID, String user) {
        this.title = title;
        this.author = author;
        this.bookID = bookID;
        this.user = user;
    }

    public Integer getBookID() {
        return bookID;
    }

    public void setBookID(Integer bookID) {
        this.bookID = bookID;
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

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }
}
