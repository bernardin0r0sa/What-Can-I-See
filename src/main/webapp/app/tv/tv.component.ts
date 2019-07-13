import { Component, OnInit } from '@angular/core';
import { TvService } from './tv.service';
import { POSTER_PATH } from 'app/shared';
import { BACKDROP_PATH } from 'app/shared';
import { BACKGROUND_LARGE_IMAGE_PATH } from 'app/shared';
import { GenreTranslator } from 'app/shared/util/genre-translator';

@Component({
  selector: 'jhi-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  Tvs: any = {};
  updatingTvs = false;
  page = 1;
  pagelimit: number;
  poster_path: any = POSTER_PATH;
  selectedTv: any;
  hasSelectedTv = false;
  backdrop_path: any = BACKDROP_PATH;
  background_large_image_path: any = BACKGROUND_LARGE_IMAGE_PATH;
  selectedTvStyle: any;

  constructor(private tvService: TvService,
    private genreTranslator: GenreTranslator) { }

  ngOnInit() {
    this.init();
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  setSelectedTvStyle(): Object {
    return {
      'background': 'linear-gradient(rgba(0, 0, 0, 0.79), rgba(0, 0, 0, 0.79)), url(' + this.background_large_image_path + this.selectedTv.backdrop_path + ') no-repeat scroll 0% 0%, rgba(0, 0, 0, 0)'
    };
  }

  selectTv(Tv: any) {
    this.selectedTv = Tv;
    if (!this.hasSelectedTv) {
      this.hasSelectedTv = true;
    }
    this.scrollTop();
  }

  onScroll() {
    if (this.page < this.pagelimit) {
      this.page++;
      this.tvService.getNowPlaying(this.page).subscribe(Tvs => {
        this.genreTranslator.getGenres(Tvs.results);
        this.Tvs = this.Tvs.concat(Tvs.results);
      });
    }
  }

  init() {
    this.updatingTvs = true;
    this.tvService.getNowPlaying(this.page).subscribe(Tvs => {
      this.Tvs = Tvs.results;
      this.pagelimit = Tvs.total_pages;
      this.genreTranslator.getGenres(this.Tvs);
      this.updatingTvs = false;
    });
  }
}
