import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'

@Component({
  selector: 'mt-shoppong-cart',
  templateUrl: './shoppong-cart.component.html',
  styleUrls: ['./shoppong-cart.component.css']
})
export class ShoppongCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  getItems() {
      return this.shoppingCartService.items
  }

  clear() {
    this.shoppingCartService.clear()
  }

  removeItem(item) {
    this.shoppingCartService.removeItem(item)
  }

  addItem(item) {
    this.shoppingCartService.addItem(item)
  }

  total(): number {
   return this.shoppingCartService.total()
  }

  lessItem(item) {
    this.shoppingCartService.lessItem(item)
  }

}
