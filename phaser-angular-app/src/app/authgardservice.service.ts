import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthgardserviceService {
  constructor() {}
  gettoken() {
    return !!sessionStorage.getItem('SeesionUser');
  }
}
