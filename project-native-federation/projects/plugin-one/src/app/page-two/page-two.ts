import { Component, inject } from '@angular/core';
import { UiButton, UiInputText, UiLabel, ShellStore} from 'library-ui';

@Component({
  selector: 'app-page-two',
  standalone: true,
  imports: [UiButton, UiInputText, UiLabel],
  templateUrl: './page-two.html',
  styleUrl: './page-two.css',
})
export class PageTwo {
  private shellStore = inject(ShellStore);

  enviarTexto(nuevoTexto: string){
    if(!nuevoTexto.trim()) return;

    this.shellStore.actualizarTexto(nuevoTexto);
  }
  
}
