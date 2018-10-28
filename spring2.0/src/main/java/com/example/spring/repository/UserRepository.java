package com.example.spring.repository;

import com.example.spring.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<User, Long> {

    User findByEmail(String email);

    User findByEmailAndPassword(String email, String password);

    User findById(Integer userID);

    List<User> findAll();
}