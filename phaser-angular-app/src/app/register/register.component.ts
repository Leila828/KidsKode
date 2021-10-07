import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { Router } from "@angular/router";
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router,
              private cookieService: CookieService) {}

  ngOnInit(): void {}
  ParentClick() {
    this.router.navigate(["register/parent"]);

    //this.router.navigate(["register/parent"]);
  }
  ChildClick() {
    if (this.cookieService.get("age")) {
      this.router.navigate(["/notallowed"]);
    } else {
      this.router.navigate(["register/child"]);
    }
  }
}
