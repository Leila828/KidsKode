import {Component, Inject, OnInit} from '@angular/core';
import { TokenStorageService } from "../_services/token-storage.service";
import { NavbarService } from "../navbar.service";
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from "@angular/common";

declare function navbar(): any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  title = "Angular11JwtAuth";
  //lang = ['English', 'العربية'];
  lang1 = ['en', 'ar'];
  selected = 'en';
  constructor(private translateService: TranslateService,
    private tokenStorageService: TokenStorageService,
    public nav: NavbarService, @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    navbar();

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes("ROLE_ADMIN");
      this.showModeratorBoard = this.roles.includes("ROLE_MODERATOR");

      this.username = user.username;
    }
  }
  changeLangage(lang: string) {
//   let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
  //  htmlTag.dir = lang === "ar" ? "rtl" : "ltr";









    // nav2.dir = lang === "ar" ? "rtl" : "ltr";

    //nav.dir = lang === "ar" ? "rtl" : "ltr";
   // nav2.dir = lang === "ar" ? "rtl" : "ltr";
   // nav3.dir = lang === "ar" ? "rtl" : "ltr";
    //lang === "ar" ?  htmlTag2.style.backgroundColor='red' : htmlTag2.style.backgroundColor='white';
    //lang === "ar" ?  nav.style.backgroundColor='red' : htmlTag2.style.backgroundColor='white';
    //lang === "ar" ?  nav.style.backgroundColor='red' : nav.style.backgroundColor='white';
  // lang === "ar" ?  nav.style.marginRight= "-180px" : nav.style.marginLeft = " 0px"
   //lang === "ar" ?  nav2.style.marginLeft= "0px" : nav.style.marginLeft = " 0px"


   // this.changeCssFile(lang);
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    let nav5 = this.document.getElementById("cur2");
    if (nav5 !== null) {
      nav5.dir = lang ? "rtl" : "ltr";
      lang === "ar" ? nav5.style.marginLeft = "310px" : nav5.style.marginLeft = "-10px";
    }
    let nav6 = this.document.getElementById("dirL");
    if (nav6 !== null) {
      nav6.dir = lang === "ar" ? "rtl" : "ltr";
    }
    let nav9 = this.document.getElementById("seq");
    if (nav9 !== null) {
    lang === "ar" ? nav9.style.marginLeft="-80px" : nav9.style.marginLeft="10px";
    }
    let nav7 = this.document.getElementById("ul1");
    if (nav7 !== null) {
      nav7.dir  = lang === "ar" ?  "rtl": "ltr" ;
      console.log('this exist');
    }
    console.log(lang);
  }

  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
    let bundleName = lang === 'ar' ?       'arabicStyle.css' : 'englishStyle.css';
    if (existingLink) {
      existingLink.href = bundleName;
      console.log('salam azul');
    } else {
      let newLink = this.document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.type = 'text/css';
      newLink.id = 'langCss';
      newLink.href = bundleName;
     // document.getElementsByTagName("head")[0].appendChild(newLink);
      headTag.appendChild(newLink);
      console.log('salam azul2');
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
