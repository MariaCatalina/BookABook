package com.example.spring.frontendmodel;

public class DeleteUser {
    private Integer userID;

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public DeleteUser(Integer userID) {
        this.userID = userID;
    }

    public DeleteUser(){

    }
}
