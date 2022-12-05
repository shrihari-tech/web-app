import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from '../rest-service.service';
import { RideDetailsComponent } from '../ride-details/ride-details.component';


@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
  public rides : any = []
  public carDetails : any = []

  myMessage=""
  public filterName! : string
  public showAllRides:boolean = false

  public childCompo : boolean = false

  @ViewChild(RideDetailsComponent) rideDetailsComponent! : RideDetailsComponent

  public showAllRidesBtn() {
    this.showAllRides = !this.showAllRides
  }

  public offerRideBtn() {
    this.router.navigate(['/offer-ride'])
  }

  constructor(private router: Router,
              private restService: RestServiceService) { }

  async ngOnInit(): Promise<void> {
    this.restService.getRideData().subscribe({next:(value: any) => this.rides = value})
    // this.rides = await this.restService.gett()
    // console.log(this.rides)
  }
  
  // getRideClone() {
  //   this.rides.push(this.restService.ridessss)
  //   console.log(this.rides)
  // }
  
}
