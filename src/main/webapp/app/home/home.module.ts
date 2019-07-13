import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WhatCanISeeSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { GenreTranslator } from 'app/shared/util/genre-translator';

@NgModule({
  imports: [WhatCanISeeSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [GenreTranslator]
})
export class WhatCanISeeHomeModule {}
