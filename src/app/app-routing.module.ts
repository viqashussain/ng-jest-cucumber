import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'shopping', loadChildren: './modules/shopping-list/shopping-list.module#ShoppingListModule' },
  { path: '**', redirectTo: 'shopping' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
