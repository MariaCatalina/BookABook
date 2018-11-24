package com.example.spring.repository;

import com.example.spring.frontendmodel.LocationModel;
import com.example.spring.model.Location;
import org.springframework.data.repository.CrudRepository;

public interface LocationRepository extends CrudRepository<Location, Long> {
}
