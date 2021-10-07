import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { Router } from "@angular/router";
declare const next: any;
declare const previous: any;
declare const submit: any;
declare function parent(): any;

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    experience: null,
    age: null,
    nomenfant: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    parent();
  }

  /*

  submit() {
    submit();
  }
  nextbtn() {
    next();
  }
  previousbtn() {
    previous();
  }
*/
  onSubmit(): void {
    const { username, email, password, experience, age, nomenfant } = this.form;
    console.log("rani dkhalt");
    this.authService
      .register(username, email, password, age, experience, nomenfant)
      .subscribe(
        (data) => {
          console.log(data);

          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(["login"]);
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
  }
}
