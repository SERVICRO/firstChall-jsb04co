"use strict";

const namesArray = [
  "Sergio",
  "David",
  "Carla",
  "Patricia",
  "Pablo",
  "Juan",
  "Lucia"
];
const agesArray = [41, 42, 28, 39, 40, 32, 24];
const gendersArray = [
  "male",
  "male",
  "female",
  "female",
  "male",
  "male",
  "female"
];
const subjectsArray = [
  "JavaScript",
  "HTML",
  "CSS",
  "JavaScript",
  "CSS",
  "JavaScript",
  "HTML"
];
const groupsArray = [
  "morning",
  "morning",
  "morning",
  "morning",
  "afternoon",
  "afternoon",
  "afternoon"
];
const teacherNames = ["Ivan", "Berto", "Alba", "Pablo", "Andres", "Lucia"];
const teacherSubjects = [
  "JavaScript",
  "CSS",
  "HTML",
  "JavaScript",
  "CSS",
  "HTML"
];
const teacherGroups = [
  "morning",
  "morning",
  "morning",
  "afternoon",
  "afternoon",
  "afternoon"
];

class Person {
  name;
  age;
  gender;

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  static createPerson(namesArray, agesArray, gendersArray) {
    return namesArray.map((name, index) => {
      return new Person(name, agesArray[index], gendersArray[index]);
    });
  }
}

class Student extends Person {
  subject;
  group;

  constructor(name, age, gender, subject, group) {
    super(name, age, gender);
    this.subject = subject;
    this.group = group;
  }
  static createStudent(
    namesArray,
    agesArray,
    gendersArray,
    subjectsArray,
    groupsArray
  ) {
    return namesArray.map((name, index) => {
      return new Student(
        name,
        agesArray[index],
        gendersArray[index],
        subjectsArray[index],
        groupsArray[index]
      );
    });
  }
}

class Teacher extends Person {
  subject;
  group;
  studentList = [];

  constructor(name, subject, group, studentList) {
    super(name);
    this.subject = subject;
    this.group = group;
    this.studentList = studentList;
  }
  static createTeacher(
    teacherNames,
    teacherSubjects,
    teacherGroups,
    studentList
  ) {
    return teacherNames.map((name, index) => {
      return new Teacher(
        name,
        teacherSubjects[index],
        teacherGroups[index],
        studentList
      );
    });
  }
  createList(Student) {
    if (Student.subject === this.subject && Student.group === this.group) {
      this.studentList = studentList.push(Student);
    }
  }
}

const persons = Person.createPerson(namesArray, agesArray, gendersArray);
console.log(persons);
const students = Student.createStudent(
  namesArray,
  agesArray,
  gendersArray,
  subjectsArray,
  groupsArray
);
console.log(students);
const teacher = Teacher.createTeacher(
  teacherNames,
  teacherSubjects,
  teacherGroups
);
console.log(teacher);
