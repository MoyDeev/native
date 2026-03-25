import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'project-native',
        pathMatch: 'full'
    },
    {
        path: 'plugin-one',
        loadChildren: () =>
            loadRemoteModule('plugin-one', './Routes')
                .then(m => m.routes)
    },
    {
        path: 'plugin-two',
        loadChildren: () =>
            loadRemoteModule('plugin-two', './Routes')
                .then(m => m.routes)
    },
    {
        path: 'project-native',
        loadChildren: () =>
            loadRemoteModule('project-native', './Routes')
                .then(m => m.routes)
    },
    {
        path: 'project-native-two',
        loadChildren: () =>
            loadRemoteModule('project-native-two', './Routes')
                .then(m => m.routes)
    }
];