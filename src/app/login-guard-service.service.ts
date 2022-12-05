import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from './rest-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardServiceService {

  constructor(private loginService: RestServiceService, private router: Router) { }
    canActivate(): boolean {
        if (this.loginService.isUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
