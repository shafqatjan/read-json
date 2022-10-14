import { Component, OnInit } from '@angular/core';
import studentsData from '../students.json';  
    
interface Student {  
    id: Number;  
    name: String;  
    email: String;  
    gender: String;  
    details: String;  
    country: String;  
}  

@Component({
  selector: 'app-json-read',
  templateUrl: './json-read.component.html',
  styleUrls: ['./json-read.component.scss']
})
export class JsonReadComponent implements OnInit {
  students: Student[] = studentsData;  
  searchText: string;
  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem: any) {
    // console.log(newItem)
    newItem.id = this.students.length > 0 ? this.students[this.students.length - 1].id  : 1;
    newItem.id++;
    this.students.push(newItem);
  }

}
