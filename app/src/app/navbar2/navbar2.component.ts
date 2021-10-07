import { Component, OnInit } from "@angular/core";
import { NavbarService } from "../navbar.service";
import { TokenStorageService } from "../_services/token-storage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar2",
  templateUrl: "./navbar2.component.html",
  styleUrls: ["./navbar2.component.css"],
})
export class Navbar2Component implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  user_role: any;

  constructor(
    private router: Router,

    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.user_role = this.tokenStorageService.getUser();

      this.showAdminBoard = this.roles.includes("ROLE_ADMIN");
      this.showModeratorBoard = this.roles.includes("ROLE_MODERATOR");

      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(["home"]);

    //window.location.reload();
  }
}
