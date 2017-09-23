import {MenuItem} from '../menu_item.model'
import { CartItem } from 'app/restaurant-detail/shoppong-cart/cartItem.model';

export class ShoppingCartService {

    items: CartItem[] = []

    clear() {
        this.items = []
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find(mItem => mItem.menuItem.id == item.id )
        if(foundItem) {
            foundItem.quantity++
        } else {
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item: CartItem) {
      this.items.splice(this.items.indexOf(item), 1)    
    }

    total() {
        return this.items.map(item => item.getTotal()).reduce((ant, prox) => ant + prox, 0)
    }
 
    lessItem(item: CartItem) {
        if(item.quantity == 1) {
            item.quantity--
            this.removeItem(item)
            return
        }
            item.quantity--
    }

}