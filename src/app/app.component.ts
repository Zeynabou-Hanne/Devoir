import { Component } from '@angular/core';
interface Class {
  name: string;
}

interface Student {
  name: string;
  className: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eadcyDemo';
  classes: Class[] = [
    { name: 'Terminal S1' },
    { name: 'Terminal S2' },
    { name: 'Terminal L1a' },
    { name: 'Terminal L2b' }
  ];

  students: Student[] = [
    { name: 'Penda Sarr', className: 'Terminal S2' }
  ];

  newClassName: string = '';
  newStudentName: string = '';
  selectedClass: string = '';

  addClass() {
    this.classes.push({ name: this.newClassName });
    this.newClassName = '';
  }
  addStudent() {
    this.students.push({ name: this.newStudentName, className: this.selectedClass });
    this.newStudentName = '';
    this.selectedClass = '';
  }

  deleteClass(index: number) {
    this.classes.splice(index, 1);
  }
  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
