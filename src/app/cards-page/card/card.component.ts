import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IRestaurant } from 'src/app/interfaces/restaurant/restaurante.interface';
import { RestaurantState } from 'src/app/models/restaurant/restaurant.redux';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Select(RestaurantState.getAllRestaurantes) restaurantes$: Observable<IRestaurant[]>;

  constructor(private store: Store) { }


  ngOnInit(): void {
    const restaurantes = this.store.selectSnapshot(RestaurantState.getAllRestaurantes);
    this.store.select(RestaurantState.getAllRestaurantes).subscribe((next) => {
      console.log('Cambio (Observable) ', next)
    })
  }
}
