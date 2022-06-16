package com.example.springapimongodb.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class WorkoutPostDTO {
    private String date;
    private String equipment;
    private String exercise;
    private String notes;
    private int repsSetOne;
    private int weightSetOne;
    private int repsSetTwo;
    private int weightSetTwo;
    private int repsSetThree;
    private int weightSetThree;
    private float estOneRepMax;
}
