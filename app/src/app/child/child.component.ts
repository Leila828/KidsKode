import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import Validation from '../utils/Validation';
import { AgeValidator, ageRangeValidator } from '../utils/agevalidation';
import {Router} from "@angular/router";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  /*

  form: any = {
    username: null,
    email: null,
    password: null,
    age: null,
  };*/
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
      age: ['', [Validators.required, ageRangeValidator(8, 18)]],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.authService.registerchild(this.form.value).subscribe(
      (data) => {
        console.log(data);
        //    this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      (err) => {
        //this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    this.router.navigate(['/login']);
  }


}
