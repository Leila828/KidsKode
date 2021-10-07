import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { enfantLearning } from "../enfantLearning";
import { NavbarService } from "../navbar.service";
import { Navbar2Component } from "../navbar2/navbar2.component";

@Component({
  selector: "app-leaderboard",
  templateUrl: "./leaderboard.component.html",
  styleUrls: ["./leaderboard.component.css"],
})
export class LeaderboardComponent implements OnInit {
  children?: enfantLearning[];
  badge?: Boolean = false;
  constructor(private userservice: UserService, public nav: NavbarService) {}

  ngOnInit(): void {
    this.nav.hide();
    this.leaderboardbothlevels();
  }
  websiteList: any = ["ItSolutionStuff.com", "HDTuto.com", "Nicesnippets.com"];

  leaderboard() {
    this.userservice.getleaderboard().subscribe((data) => {
      this.children = data;
      console.log(this.children);
    });
  }
  leaderboardbothlevels() {
    this.userservice.getleaderboardlevel1().subscribe((data) => {
      this.children = data;
      console.log(this.children);
    });
  }
}
