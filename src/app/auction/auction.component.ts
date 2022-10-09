import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {BazaarInfo} from "../bazaar/bazaar.component";

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  itemName: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    console.log('Your order has been submitted', this.itemName);
    console.log(this.itemName)
    lastValueFrom(this.http.get<BazaarInfo>('https://api.hypixel.net/skyblock/bazaar'))
      .then(value => {
        console.log(value)
      })
      .catch(reason => {
        console.log("reason: " + reason)
      })

  }

}
