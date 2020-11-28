import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { RestaurantState } from './models/restaurant/restaurant.redux';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { CardsPageModule } from './cards-page/cards-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsPageModule,
    NgxsModule.forRoot([
      RestaurantState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot()

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
