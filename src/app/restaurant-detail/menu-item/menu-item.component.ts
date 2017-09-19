import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from '../menu_item.model'


@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

    @Input() menu_item: MenuItem
    @Output() add = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menu_item)
  }

}
