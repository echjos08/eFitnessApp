import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  today = Date.now();
  fixedTimezone = '2015-06-15T09:03:01+0900';
  
  ngOnInit() {
  }

}
