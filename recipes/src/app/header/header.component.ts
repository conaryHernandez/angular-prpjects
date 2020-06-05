import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class Header {
  @Output() featureSelected = new EventEmitter<string>();

  collapsed = true;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
