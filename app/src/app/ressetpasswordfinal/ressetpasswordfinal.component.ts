import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-ressetpasswordfinal',
  templateUrl: './ressetpasswordfinal.component.html',
  styleUrls: ['./ressetpasswordfinal.component.css'],
})
export class RessetpasswordfinalComponent implements OnInit {
  form: any = {
    password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) {}
  ngOnInit(): void {}
  onSubmit(): void {
    const { password } = this.form;

    this.authService.resetpasswordfinal(password).subscribe(
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
