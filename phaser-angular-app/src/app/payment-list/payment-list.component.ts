import { Component, OnInit } from '@angular/core';
import {ParentPaymentDetails} from '../parent-payment-details';
import {UserService} from '../_services/user.service';
import {NavbarService} from '../navbar.service';
import {AuthService} from '../_services/auth.service';
import {Child} from '../child';
import {User} from '../user';
import {Parent} from '../parent';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  content?: string;
  listpayments: ParentPaymentDetails[];
  child: Child[];
  parent: Parent[];
  sure: Boolean = false;
  i: number = 0;
  form: any = {
    question1: null,
    answer1: null,
    level: null,
  };
  userlist: User[];
  userChild: User[];
  constructor(
    private userService: UserService,
    private nav: NavbarService,
    private auth: AuthService,
    private user: UserService
  ) {}

ngOnInit() {
    this.nav.hide();

    this.user.getallchilds().subscribe(
      (data) => {
        this.child = data;
        console.log(this.child);
      },
      (err) => {
        console.log(err.error.message);
      }
    );
    this.user.getallparents().subscribe(
      (data) => {
        this.parent = data;
        console.log(this.parent);
      },
      (err) => {
        console.log(err.error.message);
      }
    );
    this.user.getpaymentList().subscribe(
      (data) => {
        this.listpayments = data;
        console.log(this.listpayments.values);
      },
      (err) => {
        console.log(err.error.message);
      }
    );
  }

  onSubmit(): void {
    this.sure = false;
    /*const { question1, answer1, level } = this.form;
    console.log(level);
    console.log(level.values);
    console.log(level.value);*/

    let form = document.getElementsByTagName("form")[0];

    this.auth
      .savafaq(null, form.question1.value, form.answer1.value, form.level.value)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err.error.message);
        }
      );
  }
  showform() {
    this.sure = true;
  }

  Cancel() {
    this.sure = false;
  }
  getusers(): Promise<User[]> {
    return this.userService.getallusers().toPromise();
  }
}
