import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../models/dish.model';
import { RestaurantService } from '../services/restaurant.service';

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
  id: number = -1;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private restauService: RestaurantService) {
    route.params.subscribe(params => {
      const id = params['id'];
      const currDish = restauService.getDish(id);
      this.id = currDish.id;
      this.dishForm.patchValue({
        name: currDish.name,
        price: currDish.price
      });
      console.log(currDish)
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const value = this.dishForm.value;
    const newDish = new Dish(this.id, value.name, value.price);

    this.restauService.insertDish(newDish);
  }

}
