import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IRestaurant } from 'src/app/interfaces/restaurant/restaurante.interface';
import { RestaurantState } from 'src/app/models/restaurant/restaurant.redux';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  totalRes = 0;
  @Select(RestaurantState.getAllRestaurantes) restaurantes$: Observable<IRestaurant[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    const restaurantes = this.store.selectSnapshot(RestaurantState.getAllRestaurantes);
    this.store.select(RestaurantState.getAllRestaurantes).subscribe((next) => {
      console.log('Cambio (Observable) ', next)
      this.totalRes = next.length
    })
  }
  saludo() {
    console.log('Hola')
  }
}
