package com.example.springapimongodb.repository;

import com.example.springapimongodb.modal.Workout;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WorkoutRepository extends MongoRepository<Workout, String> {
}
