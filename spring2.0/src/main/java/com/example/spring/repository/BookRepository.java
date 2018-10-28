package com.example.spring.repository;

import com.example.spring.model.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository  extends CrudRepository<Book, Long> {

    Book findByTitleAndAuthor(String title, String author);

    Book findById(Integer id);
}
