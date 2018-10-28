package com.example.spring.repository;

import com.example.spring.model.BorrowedBooks;
import com.example.spring.model.ReturnedBooks;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ReturnedBooksRepository extends CrudRepository<ReturnedBooks, Long> {
    ReturnedBooks findByUserIDAndBookID(Integer userID, Integer bookID);
    ReturnedBooks findByBorrowerAndBookID(Integer borrower, Integer bookID);

    List<ReturnedBooks> findAllByUserID(Integer userID);

}
