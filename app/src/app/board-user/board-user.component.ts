import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
})
export class BoardUserComponent implements OnInit {
  constructor(private router1: Router) {}

  ngOnInit(): void {
    this.router1.navigate(['game2']);
  }
}
