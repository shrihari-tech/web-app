import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRideComponent } from './book-ride/book-ride.component';
import { LoginGuardServiceService } from './login-guard-service.service';
import { LoginComponent } from './login/login.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'book-ride', component:BookRideComponent, canActivate:[LoginGuardServiceService]},
  // {path: 'ride-details', component:RideDetailsComponent},
  {path: 'offer-ride', component:OfferRideComponent, canActivate:[LoginGuardServiceService]},
  { path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
