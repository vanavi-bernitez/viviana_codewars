  // Write a function that takes in a student object and returns an array
  // of all the keys in the object and its nested objects.

const student = {
    name: "John Doe",
    age: 21,
    major: "Computer Science",
    grades: {
      math: 90,
      english: 80,
      science: 95
    }
  };
  

  

















































  function getAllKeys(obj) {
    const keys = [];
    
    for (const key in obj) {
      keys.push(key);
      
      if (typeof obj[key] === "object") {
        const nestedKeys = getAllKeys(obj[key]);
        for (const nestedKey of nestedKeys) {
          keys.push(`${key}.${nestedKey}`);
        }
      }
    }
    
    return keys;
  }
  
  console.log(getAllKeys(student));
  // Expected output: 
  // [ "name", "age", "major", "grades", "grades.math", "grades.english", "grades.science" ]

