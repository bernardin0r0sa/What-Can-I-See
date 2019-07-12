import { Route } from '@angular/router';

import { TvComponent } from './tv.component';

export const tvRoute: Route = {
  path: 'tv',
  component: TvComponent,
  data: {
    pageTitle: 'tv.title'
  }
};