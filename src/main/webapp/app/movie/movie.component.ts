import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { POSTER_PATH } from 'app/shared';
import { BACKDROP_PATH } from 'app/shared';
import { BACKGROUND_LARGE_IMAGE_PATH } from 'app/shared';
import { GenreTranslator } from 'app/shared/util/genre-translator';

@Component({
  selector: 'jhi-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: any = {};
  updatingMovies = false;
  page = 1;
  pagelimit: number;
  poster_path: any = POSTER_PATH;
  selectedMovie: any;
  hasSelectedMovie = false;
  backdrop_path: any = BACKDROP_PATH;
  background_large_image_path: any = BACKGROUND_LARGE_IMAGE_PATH;
  selectedMovieStyle: any;

  constructor(private movieService: MovieService,
    private genreTranslator: GenreTranslator) { }

  ngOnInit() {
    this.init();
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  setSelectedMovieStyle(): Object {
    return {
      'background' : 'linear-gradient(rgba(0, 0, 0, 0.79), rgba(0, 0, 0, 0.79)), url(' + this.background_large_image_path + this.selectedMovie.backdrop_path + ') no-repeat scroll 0% 0%, rgba(0, 0, 0, 0)'
    };
  }

  selectMovie(movie: any) {
    this.selectedMovie = movie;
    if (!this.hasSelectedMovie) {
      this.hasSelectedMovie = true;
    }
    this.scrollTop();
  }

  onScroll() {
    if (this.page < this.pagelimit) {
      this.page++;
      this.movieService.getNowPlaying(this.page).subscribe(movies => {
        this.genreTranslator.getGenres(movies.results);
        this.movies = this.movies.concat(movies.results);
      });
    }
  }

  init() {
    this.updatingMovies = true;
    this.movieService.getNowPlaying(this.page).subscribe(movies => {
      this.movies = movies.results;
      this.pagelimit = movies.total_pages;
      this.genreTranslator.getGenres(this.movies);
      this.updatingMovies = false;
    });
  }
}
