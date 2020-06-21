import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ShortenPipe } from "./shorten.pipe";
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [AppComponent, ShortenPipe, FilterPipePipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
