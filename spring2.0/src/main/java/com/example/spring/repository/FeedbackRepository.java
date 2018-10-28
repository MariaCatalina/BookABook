package com.example.spring.repository;

import com.example.spring.model.Book;
import com.example.spring.model.Feedback;
import org.springframework.data.repository.CrudRepository;

public interface FeedbackRepository extends CrudRepository<Feedback, Long> {

    Iterable<Feedback> findAllByBookID(Integer bookID);

}
