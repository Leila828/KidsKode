import {Component, Inject, OnInit} from '@angular/core';
import { UserService } from "../_services/user.service";
import { NavbarService } from "../navbar.service";
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';
//declare function slider(): any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService, private nav: NavbarService,
              private translateService: TranslateService,
              @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.nav.show();
    //  slider();
    /*  this.userService.getPublicContent().subscribe(
      (data) => {
        this.content = data;
      },
      (err) => {
        this.content = JSON.parse(err.error).message;
      }
    );*/
    this.test();
  }
  test() {
    let nav4 = this.document.getElementById("cur");
    nav4.dir = this.translateService.currentLang === "ar" ? "rtl" : "ltr";
    // nav2.dir = lang === "ar" ? "rtl" : "ltr";
    console.log("jit");
    // nav3.dir = lang === "ar" ? "rtl" : "ltr";
    //lang === "ar" ?  htmlTag2.style.backgroundColor='red' : htmlTag2.style.backgroundColor='white';
  }
}
