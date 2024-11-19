package com.example.api_user.repository;

import com.example.api_user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByUsername(String username);

  Optional<User> findById(Integer id);

}
