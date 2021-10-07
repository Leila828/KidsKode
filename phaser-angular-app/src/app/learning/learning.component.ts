import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient } from "@angular/common/http";
import { ParentPayment } from "../parent-payment";
import { TokenStorageService } from "../_services/token-storage.service";
import { Observable } from "rxjs";
import { AuthService } from "../_services/auth.service";
import { NavbarService } from "../navbar.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Payment } from "../payment";
import { NiveauPayment } from "../niveau-payment";
import { Card } from "../card";

@Component({
  selector: "app-learning",
  templateUrl: "./learning.component.html",
  styleUrls: ["./learning.component.css"],
})
export class LearningComponent implements OnInit {
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    private authservice: AuthService,
    private nav: NavbarService,
    private Activatedroute: ActivatedRoute,
    private router: Router
  ) {}
  content?: string;
  parentpayment: ParentPayment;
  currentuser: any;
  paiment: Payment;
  card_: Card;
  list: Payment[] = [];
  cardlist: Card[] = [];
  ngOnInit(): void {
    this.nav.hide();
    console.log(this.Activatedroute.snapshot.queryParamMap.get("price"));
    /*  this.userService.getlearning().subscribe(
      (data) => {
        this.content = data;
      },
      (err) => {
        this.content = JSON.parse(err.error).message;
      }
    );*/
  }

  /*
  chargeCreditCard() {
    let form = document.getElementsByTagName("form")[0];
    this.authservice
      .chargeCard(this.tokenStorageService.getUser().id, "gryfyfrr", 200)
      .subscribe(
        (data) => {
          console.log(data);
          //    this.isSuccessful = true;
        },
        (err) => {
          //this.errorMessage = err.error.message;
        }
      );
  }*/
  chargeCreditCard() {
    let form = document.getElementsByTagName("form")[0];
    (<any>window).Stripe.card.createToken(
      {
        number: form.cardNumber.value,
        exp_month: form.expMonth.value,
        exp_year: form.expYear.value,
        cvc: form.cvc.value,
      },
      (status: number, response: any) => {
        if (status === 200) {
          console.log("cradnumber" + form.cardNumber.value);
          console.log("expmonth" + form.expMonth.value);
          console.log("expyear" + form.expYear.value);
          console.log("cvc" + form.cvc.value);

          let token = response.id;

          const level: NiveauPayment = {
            id: this.tokenStorageService.getUser().id,
            name: this.Activatedroute.snapshot.queryParamMap.get("name"),
            price: parseInt(
              this.Activatedroute.snapshot.queryParamMap.get("price")
            ),
          };

          const paiment: Payment = {
            id: this.tokenStorageService.getUser().id,
            montant: parseInt(
              this.Activatedroute.snapshot.queryParamMap.get("price")
            ),
            date: null,
            niveau: level,
          };
          this.list.push(paiment);

          const card_: Card = {
            id: this.tokenStorageService.getUser().id,
            expmonth: form.expMonth.value,
            expyear: form.expYear.value,
            type: form.cardtype.value,
            cvc: form.cvc.value,
          };
          this.cardlist.push(card_);

          const parent: ParentPayment = {
            id: this.tokenStorageService.getUser().id,
            amount: parseInt(
              this.Activatedroute.snapshot.queryParamMap.get("price")
            ),
            token: token,
            paiments: this.list,
            cards: this.cardlist,
          };

          this.authservice.chargeCard(parent).subscribe(
            (data) => {
              console.log("data ta3"+data);
              this.router.navigate(["Dashboardchild"]);
            },
            (err) => {
              //this.errorMessage = err.error.message;
            }
          );
        } else {
          console.log(response.error.message);
        }
      }
    );
  }
  cancel() {
    this.router.navigate(["Dashboard/child"]);
  }
}
