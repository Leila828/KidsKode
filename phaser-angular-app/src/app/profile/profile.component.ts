import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "../_services/token-storage.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Parent } from "../parent";
import { ActivatedRoute, Router } from "@angular/router";
import { NavbarService } from "../navbar.service";
import { UserService } from "../_services/user.service";
import { Child } from "../child";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  parents: Parent[];
  par: Parent;
  id_user;
  User: Child;
  username: Parent;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  constructor(
    private token: TokenStorageService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    public nav: NavbarService,
    private userauth: UserService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    if (this.currentUser.roles == "ROLE_CHILD") {
      this.id_user = this.currentUser.id;
      console.log("id ta3 child:" + this.id_user);
      this.getenfant();
    }
    this.nav.hide();
    /* if (this.currentUser.roles == 'ROLE_CHILD') {
      this.router.navigate(['/Dashboard/child']);
    } else {
      this.router.navigate(['/Dashboard/parent']);
    }*/
    // console.log(this.currentUser.id);
    this.getall();
    //  this.getenfant();
    this.getinfo2();
  }

  getinfo2(): void {
    this.token.getinfo().subscribe((data) => {
      this.username = data;
    });
  }
  getenfant(): void {
    this.userauth.getenfantwithscore(this.id_user).subscribe((data) => {
      this.User = data;
      console.log(data);
    });
  }
  getall(): void {
    this.token.getAll().subscribe((data) => {
      this.parents = data;
    });
  }
  logout(): void {
    if (this.isLoggedIn) {
      this.token.signOut();
      window.location.reload();
    }
  }
}
