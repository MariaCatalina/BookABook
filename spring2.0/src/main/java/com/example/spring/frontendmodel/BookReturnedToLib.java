package com.example.spring.frontendmodel;

public class BookReturnedToLib {
    private String title;
    private String author;
    private Integer bookID;
    private String userEmail;

    private Integer stars;


    public BookReturnedToLib(){

    }

    public BookReturnedToLib(String title, String author, Integer bookID, String userEmail, Integer stars) {
        this.title = title;
        this.author = author;
        this.bookID = bookID;
        this.userEmail = userEmail;
        this.stars = stars;
    }


    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
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

    public Integer getBookID() {
        return bookID;
    }

    public void setBookID(Integer bookID) {
        this.bookID = bookID;
    }



    public Integer getStars() {
        return stars;
    }

    public void setStars(Integer stars) {
        this.stars = stars;
    }
}
