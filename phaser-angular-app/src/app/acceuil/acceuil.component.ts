import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from "@angular/common";
import {Router} from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: Document, private router: Router,) { }

  ngOnInit(): void {
  }
  myTest1(){
    let vid = this.document.getElementById("divId");
    let vid2 = this.document.getElementById("vi");
    vid.style.display = 'block';
    vid2.style.display = 'none';
    console.log('called');
  }
  course1Click() {
    this.router.navigate(["loop"]);
    console.log("clicked")
  }
  course2Click() {
    let vid = this.document.getElementById("divId");
    let vid2 = this.document.getElementById("vi");
    vid.style.display = 'none';
    vid2.style.display = 'block';
    console.log('called');
    console.log("clicked")
  }
}
