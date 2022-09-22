import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger ;



openMyMenu() {
  alert("hello");
  this.trigger.toggleMenu();

} 
closeMyMenu() {
  this.trigger.closeMenu();
  console.log('close')
}  
}



