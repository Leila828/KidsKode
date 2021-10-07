import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-level-details',
  templateUrl: './level-details.component.html',
  styleUrls: ['./level-details.component.css']
})
export class LevelDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  course1Click() {
    this.router.navigate(['game1']);
  }

}
