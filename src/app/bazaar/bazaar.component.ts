import {Component, Injectable, Input, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export type Summary = {
  "amount": number,
  "pricePerUnit": number,
  "orders": number
}

export type Product = {
  "product_id": string,
  "sell_summary": Summary[],
  "buy_summary": Summary[],
  "quick_status": {
    "productId": string,
    "sellPrice": number,
    "sellVolume": number,
    "sellMovingWeek": number,
    "sellOrders": number,
    "buyPrice": number,
    "buyVolume": number,
    "buyMovingWeek": number,
    "buyOrders": number
  }
}

export type BazaarInfo = {
  "success": boolean,
  "lastUpdated": Date,
  "products": Product[]
}


@Component({
  selector: 'app-bazaar',
  templateUrl: './bazaar.component.html',
  styleUrls: ['./bazaar.component.css']
})
@Injectable()
export class BazaarComponent implements OnInit {

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
