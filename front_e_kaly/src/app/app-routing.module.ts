import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: 'ordering',
        canActivate: [AuthGuard],
        loadChildren: () => import("./ordering/ordering.module").then(md => md.OrderingModule)
    }, {
        path: 'restaurant',
        canActivate: [AuthGuard],
        loadChildren: () => import("./restaurant/restaurant.module").then(md => md.RestaurantModule)
    }, {
        path: 'signin',
        loadChildren: () => import('./signin/signin.module').then(md => md.SigninModule)
    }, {
        path: 'deliver',
        loadChildren: () => import('./deliver/deliver.module').then(md => md.DeliverModule)
    }, {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(md => md.AdminModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
