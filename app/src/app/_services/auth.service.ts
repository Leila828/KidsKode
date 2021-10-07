import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
// import { ParentPayment } from "../parent-payment";


//const AUTH_API = "http://192.168.8.101:8881/api/auth/";
//const AUTH_API_GATEWAY = "http://192.168.8.101:7777/ms-authentification/api/auth/";

const AUTH_API = "http://192.168.8.100:8881/api/auth/";
const AUTH_API_GATEWAY = "http://192.168.8.100:7777/ms-authentification/api/auth/";


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
      "http://192.168.8.100:8881/api/auth/forgetpassword",
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
      "http://192.168.8.100:7777/ms-learning/api/test/savefaq",
      { id, question, answer, level },

      httpOptions
    );
  }

  sendscore(
    id: string,
    nom: string,
    points: number,
    points2: number,
    // tslint:disable-next-line:variable-name
    points_sequencing_blockly: number,
    // tslint:disable-next-line:variable-name
    points_loop_blockly: number,
    // tslint:disable-next-line:variable-name
    points_condition_blockly: number
  ): Observable<any> {
    return this.http.post("http://192.168.8.102:7777/ms-learning/api/test/info", {
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
    return this.http.post("http://192.168.8.100:8882/api/test/initialize/" + id, {
      id,
    });
  }

  resetpasswordfinal(resetPasswordToken: string): Observable<any> {
    return this.http.post(
      "http://192.168.8.100:8881/api/auth/reset_password",
      {
        resetPasswordToken,
      },

      httpOptions
    );
  }
}
