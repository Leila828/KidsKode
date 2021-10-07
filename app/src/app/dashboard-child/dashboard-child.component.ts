import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { Parent } from '../parent';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-child',
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.css'],
})
export class DashboardChildComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username!: Parent;
  User!: String;
  p!: Parent;
  bool!: boolean;

  constructor(
    private router: Router,
    public nav: NavbarService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.nav.hide();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.getinfo2();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      if (user.roles == 'ROLE_PARENT') {
        this.bool = true;
      } else if (user.roles == 'ROLE_CHILD') {
        this.bool = false;
        this.User = user.username;
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  getinfo2(): void {
    this.tokenStorageService.getinfo().subscribe((data) => {
      this.username = data;
    });
  }
}
