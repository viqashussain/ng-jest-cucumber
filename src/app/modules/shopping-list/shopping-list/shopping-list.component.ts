import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from '../../models/shopping-list-item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  constructor() { }

  itemToAdd: ShoppingListItem = new ShoppingListItem();
  listOfTotalItems: ShoppingListItem[] = [];

  totalPrice: number = 0;

  addItem()
  {
    this.totalPrice = this.totalPrice + parseFloat(this.itemToAdd.price);
    this.listOfTotalItems.push(this.itemToAdd);
    this.itemToAdd = new ShoppingListItem();
  }

}
