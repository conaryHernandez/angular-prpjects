import { Component, Output, EventEmitter } from '@angular/core';
import { DatStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class Header {
  collapsed = true;

  constructor(private dataStorageService: DatStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
