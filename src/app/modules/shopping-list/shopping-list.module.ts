import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MatCardModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ShoppingListComponent],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatListModule
  ]
})
export class ShoppingListModule { }
