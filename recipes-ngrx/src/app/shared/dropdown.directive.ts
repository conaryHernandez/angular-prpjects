import {
  Directive,
  HostListener,
  Renderer2,
  ElementRef,
  HostBinding,
} from '@angular/core';

/*
export class DropdownDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.addClass(this.elRef.nativeElement, 'open');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.removeClass(this.elRef.nativeElement, 'open');
  }
}
*/

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
