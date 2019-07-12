import { Route } from '@angular/router';

import { MovieComponent } from './movie.component';

export const movieRoute: Route = {
  path: 'movie',
  component: MovieComponent,
  data: {
    pageTitle: 'movie.title'
  }
};
