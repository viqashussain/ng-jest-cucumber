import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from '../../models/shopping-list-item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  itemToAdd: ShoppingListItem = new ShoppingListItem();
  listOfTotalItems: ShoppingListItem[] = [];

  totalPrice: number = 0;

  ngOnInit() {
  }

  addItem()
  {
    this.totalPrice = this.totalPrice + parseFloat(this.itemToAdd.price);
    this.listOfTotalItems.push(this.itemToAdd);
    this.itemToAdd = new ShoppingListItem();
  }

}
