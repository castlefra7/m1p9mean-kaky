import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverRoutingModule } from './deliver-routing.module';
import { MainComponent } from './main/main.component';
import { DeliverService } from './deliver.service';


import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        DeliverRoutingModule,
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
    providers: [
        DeliverService
    ]
})
export class DeliverModule { }
