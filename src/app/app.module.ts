import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { HoverDirectiveDirective } from './hover-directive.directive';
import { RidefilterPipe } from './ridefilter.pipe';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { HttpClientModule } from '@angular/common/http';
import { RestServiceService } from './rest-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookRideComponent,
    HoverDirectiveDirective,
    RidefilterPipe,
    RideDetailsComponent,
    OfferRideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
