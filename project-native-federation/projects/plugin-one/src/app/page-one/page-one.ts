import { Component, inject } from '@angular/core';
import { UiLabel, ShellStore } from 'library-ui';

@Component({
  selector: 'app-page-one',
  imports: [UiLabel],
  standalone: true,
  templateUrl: './page-one.html',
  styleUrl: './page-one.css',
})
export class PageOne {
  private shellStore = inject(ShellStore);

  public texto = this.shellStore.textoCompartido;
}
