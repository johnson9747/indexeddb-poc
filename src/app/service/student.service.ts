import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IStudent } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService {
  constructor() { 
    super();
  }
  getStudents() {
    return this.connection.select({
      from: 'Students'
    });
}
addStudent(student: IStudent) {
  debugger;
  return this.connection.insert({
    into: 'Students',
    return: true, // as id is autoincrement, so we would like to    get the inserted value
    values: [student]
  });
}

}
