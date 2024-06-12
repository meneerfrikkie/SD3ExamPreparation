const electiveOne = {
  courseCode: 'ELEN4010',
  yearOffered: 4
}
const electiveTwo = {
  courseCode: 'ELEN4001',
  yearOffered: 4
}
const electiveThree = {
  courseCode: 'ELEN4020',
  yearOffered: 4
}
const electiveFour = {
  courseCode: 'ELEN4017',
  yearOffered: 4
}

const students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveFour]
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3,
    electives: [electiveOne]
  },
  {
    name: 'Jade',
    studentNumber: 678345,
    yearOfStudy: 4,
    electives: [electiveTwo, electiveThree, electiveFour]
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  }
]

// Filter method to create a new array of cross-year students
const crossYearStudents = students.filter(student =>
  // Check if the student is in their third year of study
  student.yearOfStudy === 3 &&
  // Check if the student has 'ELEN4010' as one of their electives
  student.electives.some(elective => elective.courseCode === 'ELEN4010')
)

// Loging the array of cross-year students to the console
console.log('Cross Year Students Doing ELEN4010:', JSON.stringify(crossYearStudents, null, 2))

// Function to filter students by year of study and elective
const filterStudentsByYearAndElective = (year, courseCode) => {
  // The function returns another function that takes a 'student' object as a parameter
  return student =>
    // This returned function checks if the 'yearOfStudy' property of the 'student' object equals the 'year' parameter
    student.yearOfStudy === year &&
    // And if the 'electives' array of the 'student' object contains an 'elective' object where the 'courseCode' property equals the 'courseCode' parameter
    // The 'some' method returns true if at least one 'elective' in the 'electives' array satisfies the condition, and false otherwise
    student.electives.some(elective => elective.courseCode === courseCode)
}

// Finding all fourth-year students doing ELEN4017
const fourthYearStudentsDoingELEN4017 = students.filter(filterStudentsByYearAndElective(4, 'ELEN4017'))

// Loging the results with detailed output
console.log('Fourth Year Students Doing ELEN4017:', JSON.stringify(fourthYearStudentsDoingELEN4017, null, 2))
