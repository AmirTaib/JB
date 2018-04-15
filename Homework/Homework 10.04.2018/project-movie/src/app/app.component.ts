import { Component } from '@angular/core';
import { MoviesInfo } from './shared/models/movies-info.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  moviesArray: MoviesInfo[];
  showMovieDiteils: MoviesInfo;

  movieSelectedFunc(movie: any) {
    this.showMovieDiteils = movie;
  }



  constructor() {
    this.moviesArray = [
      {
        "id": 1,
        "movieName": "Coraline",
        "price": "7.13",
        "movieDate": "7/9/2017"
      }, {
        "id": 2,
        "movieName": "Finding Dory",
        "price": "10.09",
        "movieDate": "12/12/2016"
      }, {
        "id": 3,
        "movieName": "The Wailing",
        "price": "10.69",
        "movieDate": "3/9/2017"
      }, {
        "id": 4,
        "movieName": "The Void",
        "price": "8.85",
        "movieDate": "10/30/2017"
      }, {
        "id": 5,
        "movieName": "Tower",
        "price": "8.47",
        "movieDate": "4/6/2017"
      }
    ]
  }

}
