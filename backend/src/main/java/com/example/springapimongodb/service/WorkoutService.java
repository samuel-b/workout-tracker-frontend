package com.example.springapimongodb.service;

import com.example.springapimongodb.dtos.WorkoutPostDTO;
import com.example.springapimongodb.modal.Workout;
import com.example.springapimongodb.modal.WorkoutSet;
import com.example.springapimongodb.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WorkoutService {

    @Autowired
    WorkoutRepository repository;

    //CREATE
    public Workout create(WorkoutPostDTO data){
        Workout workout = new Workout();

        workout.setEstOneRepMax(data.getEstOneRepMax());
        workout.setDate(data.getDate());
        workout.setEquipment(data.getEquipment());
        workout.setExercise(data.getExercise());
        workout.setNotes(data.getNotes());

        WorkoutSet setOne = new WorkoutSet(1, data.getRepsSetOne(), data.getWeightSetOne());
        WorkoutSet setTwo = new WorkoutSet(2, data.getRepsSetTwo(), data.getWeightSetTwo());
        WorkoutSet setThree = new WorkoutSet(3, data.getRepsSetThree(), data.getWeightSetThree());
        List<WorkoutSet> test = new ArrayList<>();
        test.add(setOne);
        test.add(setTwo);
        test.add(setThree);
        workout.setSetss(test);

        return this.repository.save(workout);
    }

    //READ
    public List<Workout> readAll(){
        return this.repository.findAll();
    }
}
