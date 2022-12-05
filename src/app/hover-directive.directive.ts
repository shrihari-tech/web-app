import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';
@Directive({
  selector: '[appHoverDirective]',
})
export class HoverDirectiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'rgba(57,192,237, 0.3)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '');
  }
}
