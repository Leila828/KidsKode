import {Component, Inject, OnInit} from '@angular/core';
import { AuthService } from "../_services/auth.service";
import { TokenStorageService } from "../_services/token-storage.service";
import { Router } from "@angular/router";
import {DOCUMENT} from '@angular/common';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string;
  constructor(
    private translateService: TranslateService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    if (this.translateService.currentLang =="ar"){
      this.test()
    }
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.test();
    })
  }
  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
        if (this.roles == "ROLE_CHILD") {
          this.router.navigate(["/Dashboardchild"]);
        } else if (this.roles == "ROLE_PARENT") {
          //this.router.navigate(['/Dashboard/parent']);
          console.log("ana parent");
          this.router.navigate(["/Dashboardparent"]);
        } else if (this.roles == "ROLE_ADMIN") {
          //this.router.navigate(['/Dashboard/parent']);
          console.log("ana parent");
          this.router.navigate(["/Dashboardadmin"]);
        }
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  test(){
    let nav7 = this.document.getElementById("login");
    if (nav7 !== null) {
      this.translateService.currentLang === 'ar' ? nav7.style.left = '51%' : nav7.style.left = '55%';
      console.log('this exist');
    }
  }
}
