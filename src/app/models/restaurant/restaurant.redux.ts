import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IRestaurant } from 'src/app/interfaces/restaurant/restaurante.interface';


//Creamos nuestra interfaz
export interface IRRestaurant {
   restaurantes: IRestaurant[];
}

@State<IRRestaurant>({
   name: 'restaurantState',
   defaults: {
      restaurantes: [
         {
            id: 1,
            name: 'La Cabaña del Tio Chon',
            img: 'https://www.unionguanajuato.mx/sites/default/files/styles/galeria/public/field/image/0argentilia_.jpg?itok=tfvLcHfE',
            cost: '200',
            description: 'Restaurante del tipo familiar, pescados y Mariscos',
            grade: '4.3'
         },
         {
            id: 2,
            name: 'La Casa de Piedra',
            img: 'https://cdn-3.expansion.mx/dims4/default/427ef18/2147483647/strip/true/crop/630x331+0+85/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fgex.lifeandstyle%2Fuploads%2Fasset%2Fasset_file%2F11503%2Fres-cover-001.jpg',
            cost: '240',
            description: 'Restaurante del tipo familiar, pescados y Mariscos',
            grade: '5'
         },
         {
            id: 3,
            name: 'Starbucks Outlet León',
            img: 'https://d1ralsognjng37.cloudfront.net/40637616-1fcc-46ec-8ad8-ef14c16e2d4c.jpeg',
            cost: '100',
            description: 'Restaurante del tipo familiar, pescados y Mariscos',
            grade: '3'
         },
         {
            id: 4,
            name: 'Moyo Plaza Altacia',
            img: 'data:image/jpeg;base64,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',
            cost: '200',
            description: 'Restaurante del tipo familiar, pescados y Mariscos',
            grade: '4'
         },
         {
            id: 5,
            name: 'Certified Store',
            img: 'https://cdn.shopify.com/s/files/1/0287/3670/files/tables-chairs.jpg?26560',
            cost: '230',
            description: 'Restaurante del tipo familiar, pescados y Mariscos',
            grade: '4.5'
         },
         {
            id: 6,
            name: 'La Cabaña del Tio Chon',
            img: 'https://www.unionguanajuato.mx/sites/default/files/styles/galeria/public/field/image/0argentilia_.jpg?itok=tfvLcHfE',
            cost: '50',
            description: 'Restaurante del tipo familiar, pescados y Mariscos',
            grade: '2.2'
         },
         {
            id: 7,
            name: 'La Cabaña del Tio Chon',
            img: 'https://www.unionguanajuato.mx/sites/default/files/styles/galeria/public/field/image/0argentilia_.jpg?itok=tfvLcHfE',
            cost: '78',
            description: 'Restaurante del tipo familiar, pescados y Mariscos',
            grade: '1.3'
         },
         {
            id: 8,
            name: 'La Cabaña del Tio Chon',
            img: 'https://www.unionguanajuato.mx/sites/default/files/styles/galeria/public/field/image/0argentilia_.jpg?itok=tfvLcHfE',
            cost: '100',
            description: 'Restaurante del tipo familiar, pescados y Mariscos',
            grade: '4.9'
         },
         {
            id: 9,
            name: 'La Cabaña del Tio Chon',
            img: 'https://www.unionguanajuato.mx/sites/default/files/styles/galeria/public/field/image/0argentilia_.jpg?itok=tfvLcHfE',
            cost: '200',
            description: 'Restaurante del tipo familiar, pescados y Mariscos',
            grade: '4.3'
         },
         {
            id: 10,
            name: 'La Cabaña del Tio Chon',
            img: 'https://www.unionguanajuato.mx/sites/default/files/styles/galeria/public/field/image/0argentilia_.jpg?itok=tfvLcHfE',
            cost: '200',
            description: 'Restaurante del tipo familiar, pescados y Mariscos',
            grade: '4.3'
         }

      ] //Arreglo con el historial de las operaciones QUE por default esta vacio
   }
})

@Injectable()
export class RestaurantState {
   constructor() { }
   @Selector() //Unir información entre varios states, vacio no hace nada
   static getAllRestaurantes(state: IRRestaurant) {
      return state.restaurantes;
   }
}

