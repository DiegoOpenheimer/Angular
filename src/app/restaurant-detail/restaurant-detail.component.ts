import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurants/restaurant.service'
import { ActivatedRoute } from '@angular/router'
import { Restaurant } from "app/restaurants/restaurant.model";


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restService: RestaurantService,
  private activated: ActivatedRoute) { }

  ngOnInit() {
  this.restService.getRestaurantById(this.activated.snapshot.params['id'])
                      .subscribe(restaurant => this.restaurant = restaurant)
  
  }

}
