import { Component, OnInit } from '@angular/core';
import { ReadCsvService } from '../services/read-csv.service';
import * as _ from 'lodash'; 
@Component({
  selector: 'app-read-csv',
  templateUrl: './read-csv.component.html',
  styleUrls: ['./read-csv.component.scss']
})
export class ReadCsvComponent implements OnInit {
  public userArray: User[] = [];
  searchText: string;
  sortType = 'asc'
  constructor(private srv: ReadCsvService) { }

  ngOnInit(): void {
    this.getData();
  }
  doSort(col:any){
    this.userArray = this.sortType == 'asc' ?  _.sortBy(this.userArray, col) :  _.sortBy(this.userArray, col).reverse(); 
    this.sortType = this.sortType == 'asc' ?  'desc' : 'asc'; 
  }
  getData() {

    this.srv.getInfo().subscribe(data => {


      const list = data.split('\n');

      list.forEach((e, index) => {
        if (index !== 0) {
          let row = list[index].split(",");

          this.userArray.push(new User(
            row[0],
            row[1],
            row[2],
            row[3],
            row[4],
            row[5],
            row[6],
            row[7]
          ));
        }

      });
      // console.log(this.userArray)
    });

  }
  addItem(newItem: any) {
    // console.log(newItem)
    // newItem.id = this.students.length > 0 ? this.students[this.students.length - 1].id  : 1;
    // newItem.id++;
    // this.students.push(newItem);
  }
}
export class User {
  Id: String;
  InternalId: String;
  Type: String;
  Billing: String;
  Email: String;
  Provider: String;
  State: String;
  Trial: String;
  constructor(
    Id: String,
    InternalId: String,
    Type: String, Billing: String, Email: String, Provider: String, State: String,
    Trial: String
  ) {
    this.Id = Id;
    this.InternalId = InternalId;
    this.Type = Type;
    this.Billing = Billing;
    this.Email = Email;
    this.Provider = Provider;
    this.State = State;
    this.Trial = Trial;

  }

}
