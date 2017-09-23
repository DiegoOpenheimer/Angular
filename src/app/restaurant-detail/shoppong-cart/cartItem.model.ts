import {MenuItem} from '../menu_item.model'

export class CartItem {
    constructor(public menuItem: MenuItem,
    public quantity: number = 1) {}
    
    public getTotal(): number {
        return this.menuItem.price * this.quantity
    }

}