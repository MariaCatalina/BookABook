package com.example.spring.repository;

import com.example.spring.model.Book;
import com.example.spring.model.BorrowedBooks;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BorrowRepository extends CrudRepository<BorrowedBooks, Long> {
    List<BorrowedBooks> findAllByUserID(Integer userID);
    List<BorrowedBooks> findAllByBorrower(Integer borrower);

    BorrowedBooks findByUserIDAndBookID(Integer userID, Integer bookID);
    BorrowedBooks findByBorrowerAndBookID(Integer borrower, Integer bookID);


}
