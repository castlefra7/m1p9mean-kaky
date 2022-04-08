import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ordering',
    loadChildren: () => import("./ordering/ordering.module").then(md => md.OrderingModule)
  }, {
    path: 'restaurant',
    loadChildren: () => import("./restaurant/restaurant.module").then(md => md.RestaurantModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
