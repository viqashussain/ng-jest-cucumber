import { Component, OnInit } from '@angular/core';

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
    this.totalPrice = this.totalPrice + parseInt(this.itemToAdd.price);
    this.listOfTotalItems.push(this.itemToAdd);
    this.itemToAdd = new ShoppingListItem();
  }

}

class ShoppingListItem
{
  item: string;
  price: string;
}
