import { Component, inject } from '@angular/core';
import { UiButton, UiInputText, UiLabel, ShellStore} from 'library-ui';

@Component({
  selector: 'app-vista-uno',
  standalone: true,
  imports: [UiButton, UiInputText, UiLabel],
  templateUrl: './vista-uno.html',
  styleUrl: './vista-uno.css',
})
export class VistaUno {
  private shellStore = inject(ShellStore);

  enviarTexto(nuevoTexto: string) {
    if (!nuevoTexto.trim()) {
      return;
    }

    this.shellStore.actualizarTexto(nuevoTexto);
  }

  cambiarTitulo(nuevoTitulo: string) {
    if(!nuevoTitulo.trim()){
      return;
    }

    this.shellStore.actualizarTopBarTitle(nuevoTitulo);
    console.log('Nuevo título enviado al shell:', nuevoTitulo);
  }
}
