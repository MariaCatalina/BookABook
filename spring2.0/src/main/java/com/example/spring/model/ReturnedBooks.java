package com.example.spring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class ReturnedBooks {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer userID;

    private Integer bookID;

    private Integer borrower;

    public ReturnedBooks() {

    }

    public ReturnedBooks(Integer userID, Integer bookID, Integer borrower) {
        this.userID = userID;
        this.bookID = bookID;
        this.borrower = borrower;
    }

    public Integer getBorrower() {
        return borrower;
    }

    public void setBorrower(Integer borrower) {
        this.borrower = borrower;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public Integer getBookID() {
        return bookID;
    }

    public void setBookID(Integer bookID) {
        this.bookID = bookID;
    }

    @Override
    public String toString() {
        return "BorrowedBooks{" +
                "id=" + id +
                ", userID=" + userID +
                ", bookID=" + bookID +
                '}';
    }
}
