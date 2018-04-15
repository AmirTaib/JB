import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MoviesInfo } from '../shared/models/movies-info.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  @Input() movies: MoviesInfo[];
  
  @Output() movieEmitter: EventEmitter<MoviesInfo> = new EventEmitter<MoviesInfo>();

  movieSelectedFunc(movie) {
    this.movieEmitter.emit(movie)

  }






}

