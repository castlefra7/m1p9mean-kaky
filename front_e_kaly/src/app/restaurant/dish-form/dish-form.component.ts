import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dish } from '../models/dish.model';
import { RestaurantService } from '../restaurant.service';

@Component({
    selector: 'app-dish-form',
    templateUrl: './dish-form.component.html',
    styleUrls: ['./dish-form.component.scss']
})
export class DishFormComponent implements OnInit {
    dishForm: FormGroup = new FormGroup({
        name: new FormControl(''),
        price: new FormControl(''),
    });
    id: String = "";
    isUpdate: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private restauService: RestaurantService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.isUpdate = true;
                this.restauService.getDish(id).subscribe({
                    next: (v) => {
                        this.id = v._id;
                        this.dishForm.patchValue({
                            name: v.name,
                            price: v.price
                        });
                    },
                    error: (e) => console.error(e),
                    complete: () => console.info('complete')
                })
            }
        })
    }

    onSubmit(): void {
        const { name, price } = this.dishForm.value;
        const newDish = new Dish(this.id, name, price);

        if (this.isUpdate) {
            this.restauService.updateDish(newDish).subscribe({
                next: (v) => {
                    console.log(v);
                    this.router.navigateByUrl('/restaurant');
                },
                error: (e) => console.error(e),
                complete: () => console.info('complete')
            })
        } else {
            this.restauService.insertDish(newDish).subscribe({
                next: (v) => {
                    console.log(v);
                    this.router.navigateByUrl('/restaurant');
                },
                error: (e) => console.error(e),
                complete: () => console.info('complete')
            })
        }
    }

}
