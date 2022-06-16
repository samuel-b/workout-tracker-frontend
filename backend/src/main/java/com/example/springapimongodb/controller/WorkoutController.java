package com.example.springapimongodb.controller;

import com.example.springapimongodb.dtos.WorkoutPostDTO;
import com.example.springapimongodb.modal.Workout;
import com.example.springapimongodb.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/workouts")
public class WorkoutController {

    @Autowired
    WorkoutService service;

    //CREATE
    @PostMapping
    public ResponseEntity<Workout> create(@RequestBody WorkoutPostDTO data){
        Workout workout = this.service.create(data);

        return new ResponseEntity<>(workout, HttpStatus.CREATED);
    }

    //READ
    @GetMapping
    public List<Workout> readAll(){
        return this.service.readAll();
    }
}
