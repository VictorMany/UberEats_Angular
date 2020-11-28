import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContainerHomeComponent } from './container-home/container-home.component';
import { RestaurantState } from '../models/restaurant/restaurant.redux';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [ContainerHomeComponent, NavBarComponent, CardComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NgxsModule.forRoot([
      RestaurantState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  exports: [
    ContainerHomeComponent
  ]
})
export class CardsPageModule { }
