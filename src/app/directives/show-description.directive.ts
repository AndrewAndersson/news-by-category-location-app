import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowDescription]'
})
export class ShowDescriptionDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('click') onclick () {
    const description = this.element.nativeElement.nextElementSibling;
    const state = description.hidden;
    this.renderer.setProperty(description, 'hidden', !state);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

}
