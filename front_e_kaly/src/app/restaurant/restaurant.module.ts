import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { ProfitsComponent } from './profits/profits.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { DishComponent } from './dish/dish.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DishFormComponent } from './dish-form/dish-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RestaurantService } from './restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CurrentOrdersComponent,
    ListDishesComponent,
    ProfitsComponent,
    DishComponent,
    DishFormComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [FormBuilder, RestaurantService]
})
export class RestaurantModule { }
