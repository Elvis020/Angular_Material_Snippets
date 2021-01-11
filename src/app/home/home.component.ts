import { Component, OnInit } from '@angular/core';
import {Course} from '../model/course';
import {COURSES} from '../model/db-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beginnerCourses: Course[];
  advancedCourses: Course[];
  myCoursesImple:Course[];


  constructor() { }

  ngOnInit(): void {
    this.myCoursesImple = Object.values(COURSES);
    this.beginnerCourses = this.myCoursesImple.filter(c => c => c.category === 'BEGINNER');
    this.advancedCourses =this. myCoursesImple.filter(c => c.category === 'ADVANCED')
  }

}
