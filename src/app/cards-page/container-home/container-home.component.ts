import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IRestaurant } from 'src/app/interfaces/restaurant/restaurante.interface';
import { RestaurantState } from 'src/app/models/restaurant/restaurant.redux';

@Component({
  selector: 'app-container-home',
  templateUrl: './container-home.component.html',
  styleUrls: ['./container-home.component.scss']
})
export class ContainerHomeComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {

  }

  OnInit() {

  }
}
