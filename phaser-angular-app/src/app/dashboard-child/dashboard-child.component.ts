import {Component, Inject, OnInit} from '@angular/core';
import { TokenStorageService } from "../_services/token-storage.service";
import { Router } from "@angular/router";
import { NavbarService } from "../navbar.service";
import { Parent } from "../parent";
import { Observable } from "rxjs";
import { enfantLearning } from "../enfantLearning";
import { UserService } from "../_services/user.service";
import { Child } from "../child";
import { ParentPayment } from "../parent-payment";
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: "app-dashboard-child",
  templateUrl: "./dashboard-child.component.html",
  styleUrls: ["./dashboard-child.component.css"],
})
export class DashboardChildComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: Parent;
  badgesequencing = false;
  badgeloop = false;
  badge_b_sequencing = false;
  badge_b_loop = false;
  badge_b_condition = false;
  user_role: any;
  User: enfantLearning;
  payment: ParentPayment;
  level1: boolean = false;
  level2: boolean = false;
  level3: boolean = false;
  currentuser: any;
  child?: enfantLearning;
  id_user;
  us:Child;
  pay: boolean = false;
  parent: Parent;
  constructor(
    private router: Router,
    public nav: NavbarService,
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private tokenStorageService: TokenStorageService,
    private userauth: UserService,
    private authservice: AuthService
  ) {}

  async ngOnInit(): Promise<void> {
    this.nav.hide();
    this.payment = await this.paymentd();

    if (this.payment != undefined) {
      this.payment.paiments.forEach((item) => {
        if (item.niveau.name == "level1") {
          this.level1 = true;
        }
        if (item.niveau.name == "level2") {
          this.level2 = true;
        }
        if (item.niveau.name == "level3") {
          this.level3 = true;
        }
      });
    }
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.currentuser = this.tokenStorageService.getUser();
    const user = this.tokenStorageService.getUser();
    this.roles = user.roles;
    this.user_role = this.tokenStorageService.getUser();
    //   this.showAdminBoard = this.roles.includes("ROLE_ADMIN");
    // this.showModeratorBoard = this.roles.includes("ROLE_MODERATOR");
    if (user.roles == "ROLE_PARENT") {
      /* this.parent = await this.getparent();
      this.id_user = this.parent.enfant.id;
      this.child = await this.getenfant(this.id_user);
      console.log(this.child);*/
      this.getinfo2();
    } else if (user.roles == "ROLE_CHILD") {
      /* this.child = await this.getenfant(user.id);

      console.log("id ta3 child" + user.id);*/

      this.id_user = user.id;
      console.log("id ta3 child:" + this.id_user);
      this.getenfant2();
    }



    console.log("badge sequencing =" + this.badgesequencing);
    console.log("badge loop =" + this.badgeloop);
    console.log("badge sequencing blockly =" + this.badge_b_sequencing);

    if (this.translateService.currentLang =="ar") {

      let htmlTag = this.document.getElementById("box1") ;
      htmlTag.dir = this.translateService.currentLang === "ar" ? "rtl" : "ltr";
      let htmlTag2 = this.document.getElementById("box2") ;
      htmlTag2.dir = this.translateService.currentLang === "ar" ? "rtl" : "ltr";
      let htmlTag3 = this.document.getElementById("box3") ;
      htmlTag3.dir = this.translateService.currentLang === "ar" ? "rtl" : "ltr";
      let c = this.document.getElementById("c") ;
      let co = this.document.getElementById("co") ;
   //   let hello = this.document.getElementById("a") ;
     // this.translateService.currentLang === "ar" ? hello.style.left= "49%" : htmlTag.style.marginLeft="5px"   ;

      this.translateService.currentLang === "ar" ? c.style.position= "relative" : htmlTag.style.marginLeft="5px"   ;
      this.translateService.currentLang === "ar" ? c.style.left= "70px" : htmlTag.style.marginLeft="5px"   ;


      this.translateService.currentLang === "ar" ? co.style.position= "relative" : htmlTag.style.marginLeft="5px"   ;
      this.translateService.currentLang === "ar" ? co.style.left= "70px" : htmlTag.style.marginLeft="5px"   ;

      this.test();
    }
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.test();
      let htmlTag = this.document.getElementById("box1") ;
      htmlTag.dir = this.translateService.currentLang === "ar" ? "rtl" : "ltr";
      let htmlTag2 = this.document.getElementById("box2") ;
      htmlTag2.dir = this.translateService.currentLang === "ar" ? "rtl" : "ltr";
      let htmlTag3 = this.document.getElementById("box3") ;
      htmlTag3.dir = this.translateService.currentLang === "ar" ? "rtl" : "ltr";
    });
  }
  getenfant1(): void {
    this.userauth.getenfantwithscore(this.id_user).subscribe((data) => {
      this.User = data;
      console.log(data);
    });
  }
  getparent(): Promise<Parent> {
    return this.tokenStorageService.getinfo().toPromise();
  }
  getenfant(id: string): Promise<enfantLearning> {
    return this.userauth.getenfantlearning(id).toPromise();
  }
  getenfant2(): void {
    this.userauth.getenfantlearning(this.id_user).subscribe(
      (data) => {
        this.User = data;
        if (this.User == undefined) {
          console.log("yaw undifined");
          console.log("ereeeeeeeer");
          this.authservice.initialize(this.id_user).subscribe((data) => {
            this.User = data;
          });
        }
      },
      (err) => {
        console.log("error theres no enfantlearning yet !");
      }
    );
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  getinfo2(): void {
    this.tokenStorageService.getinfo().subscribe((data) => {
      this.username = data;
      this.id_user = this.username.enfant.id;
      console.log("id ta3 childah b lcompte" + this.username.enfant.compte.id);

      this.userauth
        .getenfantlearning(this.username.enfant.compte.id)
        .subscribe((data) => {
          this.User = data;
          console.log(data);
          if (this.User == undefined) {
            console.log("yaw undifined");
            this.authservice
              .initialize(this.username.enfant.compte.id)
              .subscribe((data) => {
                this.User = data;
              });
          }
        });
    });
  }

  paymentdetails() {
    this.userauth
      .getpaymentdetails(this.tokenStorageService.getUser().id)
      .subscribe((data) => {
        this.payment = data;

        console.log(this.payment);
      });
  }

  paymentd(): Promise<ParentPayment> {
    return this.userauth
      .getpaymentdetails(this.tokenStorageService.getUser().id)
      .toPromise();
  }

  Level1Click() {
    this.router.navigate(["levelDetails"]);
  }
  Leve2Click() {
    this.router.navigate(["levelDetails2"]);
  }

  Purchase() {
    this.router.navigate(["learning"], {
      queryParams: { name: "level1", price: 200 },
    });
  }
  Purchase2() {
    this.router.navigate(["learning"], {
      queryParams: { name: "level2", price: 300 },
    });
  }

  Purchase3() {
    this.router.navigate(["learning"], {
      queryParams: { name: "level3", price: 350 },
    });
  }
  test(){
    //  let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    // htmlTag.dir = this.translateService.currentLang === "ar" ? "rtl" : "ltr";
    let nav7 = this.document.getElementById("sidebar-wrapper");
    if (nav7 !== null) {
      nav7.dir  = this.translateService.currentLang === "ar" ?  "rtl": "ltr" ;
      console.log('this exist');
    }
    let nav8 = this.document.getElementById("trial");
    if (nav8 !== null) {
      this.translateService.currentLang === "ar" ? nav8.style.marginLeft= "80%" : nav8.style.marginLeft="5px"   ;
      console.log('this exist');
    } let nav9 = this.document.getElementById("trial2");
    if (nav9 !== null) {
      this.translateService.currentLang === "ar" ? nav9.style.marginLeft= "73%" : nav9.style.marginLeft="5px"   ;
      console.log('this exist');
    }
    let nav1 = this.document.getElementById("trial3");
    if (nav1 !== null) {
      this.translateService.currentLang === "ar" ? nav1.style.marginLeft= "80%" : nav1.style.marginLeft="5px"   ;
      console.log('this exist');
    }
    let nav11 = this.document.getElementById("trial3");
    if (nav11 !== null) {
      this.translateService.currentLang === "ar" ? nav11.style.marginLeft= "85%" : nav11.style.marginLeft="5px"   ;
      console.log('this exist');
    }
  }
}
