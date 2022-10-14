import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorticon',
  templateUrl: './sorticon.component.html',
  styleUrls: ['./sorticon.component.scss']
})
export class SorticonComponent implements OnInit {
  @Input() icon: String;
  constructor() { }

  ngOnInit(): void {
  }

}
