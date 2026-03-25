// projects/ui-shared/src/lib/label/ui-label.ts
import { Component, input } from '@angular/core';

@Component({
    selector: 'ui-label',
    standalone: true,
    template: `<label>{{ texto() }}</label>`,
    styles: [`
    label { font-size: 0.85rem; color: #555; font-weight: 500; }
  `]
})
export class UiLabel {
    texto = input('');
}