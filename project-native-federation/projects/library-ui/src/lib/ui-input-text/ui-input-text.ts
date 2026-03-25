// projects/ui-shared/src/lib/input/ui-input.ts
import { Component, input, output, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-input-text',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input
      [placeholder]="placeholder()"
      [type]="type()"
      [(ngModel)]="value"
      (ngModelChange)="valueChange.emit($event)"
    />
  `,
  styles: [`
    input {
      padding: 0.5rem 0.8rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 0.9rem;
      width: 100%;
      box-sizing: border-box;
    }
    input:focus { outline: none; border-color: #4f46e5; }
  `]
})
export class UiInputText {
  placeholder = input('');
  type        = input<'text' | 'number' | 'email' | 'password'>('text');
  value       = model('');
  valueChange = output<string>();
}