import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ParentPayment } from "../parent-payment";
import { catchError } from "rxjs/operators";
import { Payment } from "../payment";
import { Card } from "../card";
const AUTH_API = "http://localhost:8881/api/auth/";
const AUTH_API_GATEWAY = "http://localhost:7777/ms-authentification/api/auth/";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  chargeCard(parent: ParentPayment): Observable<any> {
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(
      "http://localhost:7777/ms-payment/api/test/charge",
      parent,
      { headers: headers }
    );
  }

  savecard(card: Card): Observable<any> {
    let headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http.post(
      "http://localhost:7777/ms-payment/api/test/charge/savecard",
      card,
      { headers: headers }
    );
  }
  /*
  chargeCard(
    id: string,
    token: string,
    amount: number
  ): Observable<ParentPayment> {
    console.log("id" + id + "token:" + token + "amount" + amount);

    return this.http
      .post<ParentPayment>(
        "http://localhost:8883/api/test/charge",
        { id, token, amount },
        httpOptions
      )
      .pipe();
  }*/

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API_GATEWAY + "signin",
      {
        username,
        password,
      },
      httpOptions
    );
  }
  register(
    username: string,
    email: string,
    password: string,
    age: number,
    experience: string,
    nomenfant: string
  ): Observable<any> {
    return this.http.post(
      AUTH_API_GATEWAY + "signup/parent",
      {
        username,
        email,
        password,
        experience,
        age,
        nomenfant,
      },
      httpOptions
    );
  } /*
  registerchild(
    username: string,
    email: string,
    password: string,
    age: number
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup/child',
      {
        username,
        email,
        password,
        age,
      },
      httpOptions
    );
  }*/
  registerchild(data: any): Observable<any> {
    return this.http.post(
      AUTH_API + "signup/child",

      data
    );
  }
  resetpassword(email: string): Observable<any> {
    return this.http.post(
      "http://localhost:8881/api/auth/forgetpassword",
      {
        email,
      },

      httpOptions
    );
  }
  savafaq(
    id: string,
    question: string,
    answer: string,
    level: string
  ): Observable<any> {
    return this.http.post(
      "http://localhost:7777/ms-learning/api/test/savefaq",
      { id, question, answer, level },

      httpOptions
    );
  }

  sendscore(
    id: string,
    nom: string,
    points: number,
    points2: number,
    points_sequencing_blockly: number,
    points_loop_blockly: number,
    points_condition_blockly: number
  ): Observable<any> {
    return this.http.post("http://localhost:7777/ms-learning/api/test/info", {
      id,
      nom,
      points,
      points2,
      points_sequencing_blockly,
      points_loop_blockly,
      points_condition_blockly,
    });
  }

  initialize(id: string): Observable<any> {
    return this.http.post("http://localhost:8882/api/test/initialize/" + id, {
      id,
    });
  }

  resetpasswordfinal(resetPasswordToken: string): Observable<any> {
    return this.http.post(
      "http://localhost:8881/api/auth/reset_password",
      {
        resetPasswordToken,
      },

      httpOptions
    );
  }
}
