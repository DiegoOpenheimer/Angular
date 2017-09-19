import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RestaurantService } from '../../restaurants/restaurant.service'
import { Observable } from 'rxjs/Observable'
import { MenuItem } from '../menu_item.model'


@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItem: Observable<MenuItem[]>

  constructor(private restService: RestaurantService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.menuItem = this.restService.menuOfRestaurants(this.route.parent.snapshot.params['id'])

  }

  getMenuItem(menu) {
    console.log(menu)
  }

}
