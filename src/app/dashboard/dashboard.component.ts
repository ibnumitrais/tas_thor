import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
import { Router }            from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    $('.dropdown:not(.custom)').dropdown();

    $('.ui.sidebar')
      .sidebar({
        context: $('.bottom.segment')
      })
      .sidebar('attach events', '.menu .item.trigger');
  }
}
