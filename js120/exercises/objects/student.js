function createStudent(name, year) {
  return {name,
    year,
    info() {console.log(`${this.name} is a ${this.year} year student`)},
    courses: [],
    listCourses() {console.log(this.courses)},
    addCourse(newCourse) {this.courses.push(newCourse)},
    addNote(code, str) {
      let currCourse = this.courses.filter(x => x.code === code)[0];
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
    }
  };
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"