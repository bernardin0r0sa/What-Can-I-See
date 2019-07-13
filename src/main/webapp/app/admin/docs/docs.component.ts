import { Component, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'jhi-docs',
  templateUrl: './docs.component.html'
})
export class JhiDocsComponent implements OnDestroy {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'swag');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'swag');
  }
}
