import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import Validation from "../utils/Validation";
import { AgeValidator, ageRangeValidator } from "../utils/agevalidation";
import {TokenStorageService} from '../_services/token-storage.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  expiredDate;

  /*

  form: any = {
    username: null,
    email: null,
    password: null,
    age: null,
  };*/
  isSuccessful = false;
  cook: string;
  isSignUpFailed = false;
  errorMessage = "";
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private token: TokenStorageService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          "",
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        email: ["", [Validators.required, Validators.email]],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        age: ["", [Validators.required, ageRangeValidator(8, 18)]],
      },
      { updateOn: "submit" }
    );

    /* */
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    const dateNow = new Date();
    dateNow.setMinutes(dateNow.getMinutes() + 10);
    console.log("agee:" + this.form.controls["age"].value);
    if (this.form.controls["age"].value < 8) {
      this.cookieService.set("age", this.form.controls["age"].value, dateNow);
    }

    if (this.cookieService.get("age")) {
      this.router.navigate(["/notallowed"]);
    }

    if (this.form.invalid) {
      return;
    }
    this.authService.registerchild(this.form.value).subscribe(
      (data) => {
        console.log(data);
        //    this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(["login"]);
      },
      (err) => {
        //this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );

    console.log(JSON.stringify(this.form.value, null, 2));
  }
}
