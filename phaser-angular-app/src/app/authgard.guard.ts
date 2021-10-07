import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { TokenStorageService } from "./_services/token-storage.service";

@Injectable({
  providedIn: "root",
})
export class AuthgardGuard implements CanActivate {
  constructor(private router: Router, private token: TokenStorageService) {}

  canActivate(): boolean {
    //  next: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.token.gettoken()) {
      this.router.navigateByUrl("/login");
    }
    return this.token.gettoken();
  }
}
