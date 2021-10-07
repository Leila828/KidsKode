import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Parent } from "../parent";
import { map } from "rxjs/operators";
const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";
@Injectable({
  providedIn: "root",
})
export class TokenStorageService {
  currentUser: any;

  constructor(private http: HttpClient) {
    window.sessionStorage.getItem(USER_KEY);
    console.log();
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public gettoken() {
    return !!sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
  /*  public getParent(user: any) {
    return this.http.get('http://localhost:8881/api/test/' + user.id);
  }*/
  getinfo(): Observable<any> {
    this.currentUser = this.getUser();
    return this.http.get(
      "http://localhost:8881/api/test/" + this.currentUser.email
    );
  }
  getinfo_enfant(): Observable<any> {
    this.currentUser = this.getUser();
    return this.http.get(
      "http://localhost:8881/api/test/enfant" + this.currentUser.email
    );
  }
  getAll(): Observable<any> {
    return this.http.get("http://localhost:8881/api/test/allparents");
    //  .pipe(map((response) => response._embedded.parent));
  }
}
interface GetResponse {
  _embedded: {
    parent: Parent[];
  };
}
