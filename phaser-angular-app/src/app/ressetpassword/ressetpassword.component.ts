import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-ressetpassword",
  templateUrl: "./ressetpassword.component.html",
  styleUrls: ["./ressetpassword.component.css"],
})
export class RessetpasswordComponent implements OnInit {
  form: any = {
    email: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onSubmit(): void {
    const { email } = this.form;

    this.authService.resetpassword(email).subscribe(
      (data) => {
        console.log(data);
        this.isSuccessful = true;
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
