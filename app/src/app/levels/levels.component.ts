import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Level1Click() {
    this.router.navigate(['levelDetails']);
  }
  Leve2Click() {
    this.router.navigate(['level2Details']);
  }

}
