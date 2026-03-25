import { Component, inject } from '@angular/core';
import { UiLabel, ShellStore } from 'library-ui';

@Component({
  selector: 'app-vista-dos',
  standalone: true,
  imports: [UiLabel],
  templateUrl: './vista-dos.html',
  styleUrl: './vista-dos.css',
})
export class VistaDos {


  private shellStore = inject(ShellStore);
  public texto = this.shellStore.textoCompartido;

  public color = this.shellStore.colorFondo;
}
