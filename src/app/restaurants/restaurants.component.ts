import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant.model'
import { RestaurantService } from "app/restaurants/restaurant.service";

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private modelRest: RestaurantService) { }

  ngOnInit() {
    this.modelRest.getRestaurants().subscribe(restaurant => this.restaurants = restaurant)
                  


  }

}
