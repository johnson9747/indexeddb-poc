import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { IStudent, Student } from '../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {  
  students: Array<any>  = [];
  newStudent: IStudent = new Student();
  constructor(private studentService:StudentService) { }

  ngOnInit() {   
    this.getStudents();  
  }
  getStudents() {
    this.studentService.getStudents().
    then(students => {
        this.students = students;
    }).catch(error => {
        console.error(error);
        alert(error.message);
    });
}
addStudent() {
  this.studentService.addStudent(this.newStudent).
  then((addedStudents: IStudent[]) => {
    debugger;
   if (addedStudents.length > 0) {
    this.students.push(addedStudents[0]);
    this.clearNewStudent();
    alert('Successfully added');
   }
  }).catch(error => {
   console.error(error);
   alert(error.message);
  });
 }
clearNewStudent() {
  this.newStudent = new Student();
 }

}
