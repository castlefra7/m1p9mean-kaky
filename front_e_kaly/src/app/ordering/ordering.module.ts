import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DishComponent } from './dish/dish.component';
import { SelectedDishComponent } from './selected-dish/selected-dish.component';
import { OrderingRoutingModule } from './ordering-routing.module';
import { OrderingService } from './ordering.service';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    MainComponent,
    DishComponent,
    SelectedDishComponent
  ],

  imports: [
    CommonModule,
    OrderingRoutingModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    DragDropModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [OrderingService]
})
export class OrderingModule { }
