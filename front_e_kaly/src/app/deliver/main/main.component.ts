import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { OrderRow } from '../deliver.model';
import { DeliverService } from '../deliver.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    orders: OrderRow[] = [];
    ordersColumns: string[] = ['date', 'name', 'price', 'amount', 'status', 'action'];
    
    constructor(private deService: DeliverService, public auth: AuthService) {
    }

    ngOnInit(): void {

        this.fetch();
    }

    fetch(): void {
        this.deService.getAllOrders().subscribe({
            next: (v) => {
                const nOrders = [] as OrderRow[];
                v.forEach(order => {                    
                    order.details.forEach(detail => {
                        nOrders.push({
                            name: detail.name,
                            price: detail.price,
                            amount: detail.amount,
                            date: new Date(order.date),
                            status: detail.status,
                            dish_id: detail.dish_id,
                            order_id: order._id
                        } as OrderRow);
                    })
                });
                this.orders = Object.assign([], nOrders);
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete')
        })
    }

    updateStatus(order_id: String, dish_id: String) {
        this.deService.updateStatus(order_id, dish_id).subscribe({
            next: (v) => {
                this.fetch();
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete')
        })
    }

}
