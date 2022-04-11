import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverRoutingModule } from './deliver-routing.module';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    DeliverRoutingModule
  ]
})
export class DeliverModule { }
