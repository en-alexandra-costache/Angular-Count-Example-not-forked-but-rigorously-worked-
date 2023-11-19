import { Component, signal, Input } from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
})
export class TextInputComponent {
  @Input() initialValue: number = 0;
  public someMessage = signal(this.initialValue);

  public plusPlus() {
    this.someMessage.update((prev) => prev + 1);
  }

  public minusMinus() {
    if (this.someMessage() > 0) {
      this.someMessage.update((prev) => prev - 1);
    }
  }

  public resettey() {
    this.someMessage.set(0);
  }
}
