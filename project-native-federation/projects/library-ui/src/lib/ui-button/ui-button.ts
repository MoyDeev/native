import { Component, input, output } from '@angular/core';

@Component({
    selector: 'ui-button',
    standalone: true,
    template: `
    <button [class]="'btn btn-' + variant()" (click)="clicked.emit()">
      <ng-content />
    </button>
  `,
    styles: [`
    .btn { padding: 0.5rem 1.2rem; border: none; border-radius: 8px; cursor: pointer; }
    .btn-primary   { background: #4f46e5; color: white; }
    .btn-danger    { background: #dc2626; color: white; }
    .btn-secondary { background: #e5e7eb; color: #111;  }
  `]
})
export class UiButton {
    variant = input<'primary' | 'danger' | 'secondary'>('primary');
    clicked = output();
}