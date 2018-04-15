import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MoviesInfo } from '../shared/models/movies-info.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  @Input() showMovieSelectedDiteils:MoviesInfo;
  
}
