import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
    {
        path: '', // Ruta vacía por defecto
        component: App // El componente que se va a mostrar
    }
];