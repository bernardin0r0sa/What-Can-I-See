import { Routes } from '@angular/router';

import {docsRoute} from './';

import { UserRouteAccessService } from 'app/core';

const ADMIN_ROUTES = [docsRoute];

export const adminState: Routes = [
  {
    path: '',
    data: {
      authorities: ['ROLE_ADMIN']
    },
    canActivate: [UserRouteAccessService],
    children: ADMIN_ROUTES
  }
];
