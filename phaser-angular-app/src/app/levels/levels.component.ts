import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenStorageService } from "../_services/token-storage.service";
import { UserService } from "../_services/user.service";
import { Child } from "../child";

@Component({
  selector: "app-levels",
  templateUrl: "./levels.component.html",
  styleUrls: ["./levels.component.css"],
})
export class LevelsComponent implements OnInit {
  currentUser: any;
  id_user;
  User?: Child;
  score1;
  badgesequencing: Boolean = false;
  badgeloop: Boolean = false;

  constructor(
    private router: Router,
    private token: TokenStorageService,
    private userauth: UserService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    if (this.currentUser.roles == "ROLE_CHILD") {
      this.id_user = this.currentUser.id;
      this.currentUser = this.token.getUser();
      if (this.currentUser.roles == "ROLE_CHILD") {
        this.id_user = this.currentUser.id;
        console.log("id ta3 child:" + this.id_user);
        this.getenfant();
      }
    } else if (this.currentUser.roles == "ROLE_PARENT") {
    }
  }
  Level1Click() {
    this.router.navigate(["levelDetails"]);
  }
  Leve2Click() {
    this.router.navigate(["blockly"]);
  }
  getenfant(): void {
    this.userauth.getenfantwithscore(this.id_user).subscribe((data) => {
      this.User = data;
      console.log(data);
      if (this.User.enfantLearning.points == 60) {
        this.badgesequencing = true;
        console.log("badge loop=" + this.badgeloop);
        console.log("points2=" + this.User.enfantLearning.points2);
      }
      if (this.User.enfantLearning.points2 == 10) {
        this.badgeloop = true;
        console.log("badge loop=" + this.badgeloop);
      }
    });
  }
}
