import {Component, Inject, OnInit} from '@angular/core';
import { TokenStorageService } from "./_services/token-storage.service";
import { NavbarService } from "./navbar.service";
import {TranslateService} from '@ngx-translate/core';
import { DOCUMENT } from "@angular/common";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "phaser-angular-app";
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  lang1 = ['en', 'ar'];
  selected = 'en';


  constructor(private translateService: TranslateService,
              @Inject(DOCUMENT) private document: Document,
              private tokenStorageService: TokenStorageService,
    public nav: NavbarService
  ) {}

  ngOnInit(): void {
    this.nav.show();
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
    //  let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    //htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.changeCssFile(lang);
    console.log(lang);
  }

  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
    let bundleName = lang === 'ar' ?       'arabicStyle.css' : 'englishStyle.css';
    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      let newLink = this.document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.type = 'text/css';
      newLink.id = 'langCss';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
