import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {

  @Input() public details:any

  public showError : boolean = false

  public booked : boolean = false

  public bookRide() {
    const loggedUserName = localStorage.getItem('username')
    if(this.details.name != loggedUserName) {
      this.showError = false
      this.booked = !this.booked
    }
    else {
      this.showError = true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
