import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenStorageService } from "./token-storage.service";
const API_URL = "http://localhost:8881/api/test/";

@Injectable({
  providedIn: "root",
})
export class UserService {
  currentUser: any;
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + "all", { responseType: "text" });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + "user", { responseType: "text" });
  }

  /*  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }*/

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + "admin", { responseType: "text" });
  }
  getParentBoard(): Observable<any> {
    return this.http.get(API_URL + "parent", { responseType: "text" });
  }
  getpass(): Observable<any> {
    return this.http.get("http://localhost:8881/api/auth/token", {
      responseType: "text",
    });
  }

  getlearning(): Observable<any> {
    return this.http.get(
      "http://localhost:7777/ms-learning/api/test/learning",
      {
        responseType: "text",
      }
    );
  }
  getenfantwithscore(id: String): Observable<any> {
    return this.http.get(
      "http://localhost:7777/ms-authentification/api/test/enfantwithlearning/" +
        id
    );
  }
  getleaderboard(): Observable<any> {
    return this.http.get("http://localhost:8882/api/test/leaderboard");
    //  .pipe(map((response) => response._embedded.parent));
  }
  getleaderboardlevel1(): Observable<any> {
    return this.http.get("http://localhost:8882/api/test/leaderboard/level1");
    //  .pipe(map((response) => response._embedded.parent));
  }
  getenfantlearning(id: string): Observable<any> {
    return this.http.get(
      "http://localhost:8882/api/test/enfant_learning/" + id
    );
    //  .pipe(map((response) => response._embedded.parent));
  }
  getpaymentdetails(id: string): Observable<any> {
    return this.http.get(
      "http://localhost:7777/ms-payment/api/test/paymentdetails/" + id
    );
  }
  getpaymentList(): Observable<any> {
    return this.http.get(
      "http://localhost:7777/ms-payment/api/test/paymentwithuser"
    );
  }
  getlistfaq2(): Observable<any> {
    return this.http.get(
      "http://localhost:7777/ms-learning/api/test/listfaqlevel2"
    );
    //  .pipe(map((response) => response._embedded.parent));
  }
  getlistfaq1(): Observable<any> {
    return this.http.get(
      "http://localhost:7777/ms-learning/api/test/listfaqlevel1"
    );
    //  .pipe(map((response) => response._embedded.parent));
  }
  getallusers(): Observable<any> {
    return this.http.get(
      "http://localhost:7777/ms-authentification/api/test/allusers"
    );
  }
  getallparents(): Observable<any> {
    return this.http.get(
      "http://localhost:7777/ms-authentification/api/test/allparents"
    );
  }
  getallchilds(): Observable<any> {
    return this.http.get(
      "http://localhost:7777/ms-authentification/api/test/allchilds"
    );
  }

}
