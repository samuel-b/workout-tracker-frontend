package com.example.springapimongodb.modal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "workouts")
public class Workout {

    @Id
    private String id;
    private String date;
    private String equipment;
    private float estOneRepMax;
    private String exercise;
    private String notes;
    private List<WorkoutSet> setss;

}
