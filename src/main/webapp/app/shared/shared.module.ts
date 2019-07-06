import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WhatCanISeeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [WhatCanISeeSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [WhatCanISeeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WhatCanISeeSharedModule {
  static forRoot() {
    return {
      ngModule: WhatCanISeeSharedModule
    };
  }
}
