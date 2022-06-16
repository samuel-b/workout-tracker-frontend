# Description

A platform to allow that tracks workouts, with a react front-end to read and create data from the firestore (noSQL) back-end.
Project was created for the purpose to motivate me and track my workouts and to introduce features I have not seen on existing popular platforms.

# To Do
- [x] Created firestore backend
- [x] Created react front-end
- [x] Connected back-end to front-end
- [x] Created a GET(all) method
- [x] Created a CREATE method 
- [x] Created a basic component/UI to test or display the CREATE/GET methods above
- [x] Created a method that calculates the estimated 1RM on all exercises sets and write the highest to the record. 
- [x] Implementation of chart.js library
- [x] Re-factored WorkoutFrom - state, handleInput function and dateFormat function.
- [x] Add basic form validation to WorkoutForm
- [x] Add basic success confirmation on WorkoutForm submission
- [x] Added a required pass to form and added basic responsiveness so web app can be deployed and for can be filled in real-time on a mobile
- [ ] Style WorkoutForm with styled components/scss
- [ ] Style WorkoutInfo with styled components/scss
- [ ] Style WorkoutLog with styled components/scss
- [ ] Improve site responsiveness (incl. chart size)
- [ ] Loading spinner/component to replace span of text (when fetching data)
- [ ] Add comments to code-base 
- [ ] Re-factor code-base

# Future features/nice to haves
- [ ] Gamification of the experience
- [ ] Authentication
- [ ] Replace firestore with a Spring Boot API/MySQL or other DB
- [ ] Possible re-structure of the create method/data

# Updates
- 16/06/2022 - Un-published Github Pages/Live version, worked on a Spring Boot API and MongoDB Atlas DB has an alternative to firestore
- 16/06/2022 - Replaced firestore with a Spring Boot API and MongoDB Atlas backend, API currently only has CREATE and READ(all) operations
