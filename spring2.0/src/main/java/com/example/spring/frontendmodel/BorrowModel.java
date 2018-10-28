package com.example.spring.frontendmodel;

import javax.persistence.criteria.CriteriaBuilder;

public class BorrowModel {
    private Integer userID;
    private Integer bookID;
    private Integer borrower;

    private BorrowModel(){

    }

    public BorrowModel(Integer userID, Integer bookID, Integer borrower) {
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
}
