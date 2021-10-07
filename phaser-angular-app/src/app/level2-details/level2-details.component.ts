import {Component, Inject, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { TokenStorageService } from "../_services/token-storage.service";
import { AuthService } from "../_services/auth.service";
import { UserService } from "../_services/user.service";
import { Child } from "../child";
import { Parent } from "../parent";
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: "app-level2-details",
  templateUrl: "./level2-details.component.html",
  styleUrls: ["./level2-details.component.css"],
})
export class Level2DetailsComponent implements OnInit {
  user: Child = null;

  currentUser: any;
  id_user;
  User: Child;

  username: Parent;
  score1;
  score2;
  constructor(private translateService: TranslateService,
              @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private token: TokenStorageService,
    private userauth: UserService,
    private authservice: AuthService
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
      this.getinfo2();
    }
    if (this.translateService.currentLang =="ar"){
      let htmlTag = this.document.getElementById("box") ;
      htmlTag.dir = this.translateService.currentLang === "ar" ? "rtl" : "ltr";


      this.test();
    }
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.test();
      let htmlTag = this.document.getElementById("box") ;
      htmlTag.dir = this.translateService.currentLang === "ar" ? "rtl" : "ltr";

    });
  }

 /* getinfo2(): void {
    this.token.getinfo().subscribe((data) => {
      this.username = data;
      this.id_user = this.username.enfant.id;
      console.log("usernaaaaaaaaem" + this.username.enfant.id);

      this.userauth
        .getenfantwithscore(this.username.enfant.id)
        .subscribe((data) => {
          this.User = data;
          console.log(data);
        });
    });
  }*/
  getinfo2(): void {
    this.token.getinfo().subscribe((data) => {
      this.username = data;
      this.id_user = this.username.enfant.id;
      console.log("usernaaaaaaaaem" + this.username.enfant.id);

      this.userauth
        .getenfantwithscore(this.username.enfant.compte.id)
        .subscribe((data) => {
          this.User = data;
          console.log(data);
        });
    });
  }
  getenfant(): void {
    this.userauth.getenfantwithscore(this.id_user).subscribe((data) => {
      this.User = data;
      console.log(data);
    });
  }

  course1Click() {
    this.router.navigate(["blocklysequencing"]);
  }
  course2Click() {
    this.router.navigate(["blocklyloop"]);
  }
  course3Click() {
    this.router.navigate(["blocklycondition"]);
  }
  test(){
    let nav8 = this.document.getElementById("trial");
    if (nav8 !== null) {
      this.translateService.currentLang === "ar" ? nav8.style.marginLeft= "80%" : nav8.style.marginLeft="5px"   ;

      console.log('this exist');
    }
  }
}
