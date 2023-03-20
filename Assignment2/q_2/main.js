"use strict";

const CREDITS = 4.0;

const grade_point = {
  "A+": 4.3,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  C: 2.0,
  F: 0,
};

const student_name = "James Doe";

function course_mark(name_course, grade_letter) {
  grade_letter = grade_letter.toUpperCase();
  let course_result = {};

  if (Object.keys(grade_point).includes(grade_letter)) {
    let mark = grade_point[grade_letter] * CREDITS;
    course_result[name_course] = mark;
  } else {
    console.log("Enter correct a letter grade.");
  }

  return course_result;
}

function calc_gpa(course_1, course_2, course_3, course_4) {
  let marks = [];
  let sum_gpa = 0;
  let gpa = 0;

  if (
    Object.keys(course_1).length !== 0 &&
    Object.keys(course_2).length !== 0 &&
    Object.keys(course_3).length !== 0 &&
    Object.keys(course_4).length !== 0
  ) {
    marks.push(course_1[Object.keys(course_1)]);
    marks.push(course_2[Object.keys(course_2)]);
    marks.push(course_3[Object.keys(course_3)]);
    marks.push(course_4[Object.keys(course_4)]);

    for (const mark of marks) {
      sum_gpa += mark;
    }

    gpa = sum_gpa / marks.length;
  } else {
    console.log("Check to correct a letter grade.");
  }

  return gpa;
}

function show_gpa(student, gpa_value) {
  gpa_value === 0
    ? console.log("")
    : console.log(`Student ${student} has GPA: ${gpa_value}`);
}

show_gpa(
  student_name,
  calc_gpa(
    course_mark("Course 1", "A+"),
    course_mark("Course 2", "B+"),
    course_mark("Course 3", "A"),
    course_mark("Course 4", "F")
  )
);
