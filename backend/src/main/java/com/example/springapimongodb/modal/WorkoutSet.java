package com.example.springapimongodb.modal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WorkoutSet {
    private int set;
    private int reps;
    private int weight;

    @Override
    public String toString() {
        return "set{" +
                "set=" + set +
                ", reps=" + reps +
                ", weight=" + weight +
                '}';
    }
}
