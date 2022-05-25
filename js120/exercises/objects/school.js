function CreateStudent(name, year) {
  return {name,
    year,
    info() {console.log(`${this.name} is a ${this.year} year student`)},
    courses: [],
    listCourses() {console.log(this.courses)},
    addCourse(newCourse) {this.courses.push(newCourse)},
    addNote(code, str) {
      let currCourse = this.findCourse(code);
      currCourse.note = currCourse.note ? `${currCourse.note} ; ${str}` : str;
    },
    updateNote(code, str) {
      let currCourse = this.courses.filter(x => x.code === code)[0];
      currCourse.note = str;
    },
    viewNotes() {
      for (let course of this.courses.filter(x => x.note !== undefined)) {
        console.log(`${course.name}: ${course.note}`);
      }
    },
    findCourse(code) {
      return this.courses.filter(x => x.code === code)[0];
    },
    findCourseByName(courseName) {
      return this.courses.filter(x => x.name === courseName)[0];
    }
  };
}

class School {
  constructor() {
    this.students = [];
  }

  static YEARS_ACCEPTED = ['1st', '2nd', '3rd', '4th', '5th'];

  addStudent(name, year) {
    if (!School.YEARS_ACCEPTED.includes(year)) {
      console.log("Invalid Year");
      return;
    } else if (this.findStudent(name)) {
      console.log("Student with identical name already present.");
    } else {
      this.students.push(new CreateStudent(name, year));
    }
  }
  

  enrollStudent(name, course) {
    this.findStudent(name).addCourse(course);
  }

  addGrade(name, code, grade) {
    let currCourse = this.findStudent(name).findCourse(code);
    if (currCourse.grade !== undefined) {
      console.log("Student already received grade.")
    } else {
      currCourse.grade = grade;
    }
  }

  findStudent(studentName) {
    return this.students.filter(student => student.name === studentName)[0]
  }

  getReportCard(student) {
    this.findStudent(student).courses.forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`)
      } else {
        console.log(`${course.name}: In Progress`);
      }
    });
  }

  courseReport(courseName) {
    let scoresToPrint = [];
    let scores = [];
    for (let student of this.students) {
      if (student.findCourseByName(courseName) && student.findCourseByName(courseName).grade) {
        scoresToPrint.push(`${student.name}: ${student.findCourseByName(courseName).grade}`)
        scores.push(student.findCourseByName(courseName).grade);
      }
    }
    if (scoresToPrint.length === 0) {
      console.log(undefined);
    } else {
      console.log(`=${courseName} Grades=`);
      scoresToPrint.forEach(str => console.log(str));
      console.log("---");
      let average = scores.reduce((x,y) => x + y) / scores.length;
      console.log(`Course Average: ${parseInt(average)}`)
    }
  }
}

let school = new School();
school.addStudent("foo", "3rd");
school.enrollStudent("foo", { name: 'Math', code: 101, grade: 95});
school.enrollStudent("foo", { name: 'Advanced Math', code: 102, grade: 90});
school.enrollStudent("foo", { name: 'Physics', code: 202});

school.addStudent('bar', '1st');
school.enrollStudent('bar', { name: 'Math', code: 101, grade: 91});

school.addStudent('qux', '2nd');
school.enrollStudent('qux', { name: 'Math', code: 101, grade: 93});
school.enrollStudent('qux', { name: 'Advanced Math', code: 102, grade: 90});

school.getReportCard('foo');
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');