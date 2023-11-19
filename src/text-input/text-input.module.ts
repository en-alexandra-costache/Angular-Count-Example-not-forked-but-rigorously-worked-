import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TextInputComponent } from './text-input.component';

@NgModule({
  declarations: [TextInputComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [TextInputComponent],
  exports: [TextInputComponent],
})
export class TextInputModule {}
