//import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
//import { Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { tokenName } from '@angular/compiler';
let tok: String;
const ur = 'localh';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  form: any = {
    resetPasswordToken: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  tok!: String;
  content: any;
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {}
  onSubmit(): void {
    const { resetPasswordToken } = this.form;

    this.authService.resetpasswordfinal(resetPasswordToken).subscribe(
      (data) => {
        console.log(data);
        this.isSuccessful = true;
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    //  this.router.navigate(['/login']);
  }
}
