/* 
Create an object called student with the following properties:

name (string)
age (number)
gender (string)
favoriteSubjects (array)
Add a method to the student object called addSubject that takes a subject (string) 
as a parameter and adds it to the favoriteSubjects array.

Create an array called students and add at least 3 student objects to it.

Write a function called getAverageAge that takes an array of student objects as 
a parameter and returns the average age of all the students in the array.

Write a function called getStudentsBySubject that takes an array of student objects
 and a subject as parameters and returns an array of all the students who have that 
 subject in their favoriteSubjects array.

Finally, write a function called printStudents that takes an array of student 
objects as a parameter and logs their name and age in the following format: 
"Name: [name], Age: [age]". Use a for...in loop to iterate through the student
 objects in the array.



*/


const student1 = {
    name: 'Pedro',
    age: 17,
    gender: 'Female',
    favoriteSubject: ['Math', 'Sience', 'Art']
}





































// let student1 = {
//     name: "John",
//     age: 25,
//     gender: "Male",
//     favoriteSubjects: ["Math", "Science"]
//   };
  
//   let student2 = {
//     name: "Jane",
//     age: 23,
//     gender: "Female",
//     favoriteSubjects: ["History", "Literature"]
//   };
  
//   let student3 = {
//     name: "Mike",
//     age: 20,
//     gender: "Male",
//     favoriteSubjects: ["Art", "Music"]
//   };
  
//   student1.addSubject("Computer Science");
  
//   let students = [student1, student2, student3];
  
//   console.log(getAverageAge(students)); // Output: 22.7
  
//   console.log(getStudentsBySubject(students, "Math")); // Output: [{name: "John", age: 25}]
  
//   printStudents(students); // Output: 
//   // Name: John, Age: 25
//   // Name: Jane, Age: 23
//   // Name: Mike, Age: 20
