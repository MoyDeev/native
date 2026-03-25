import { Routes } from '@angular/router';
import { PageOne } from './page-one/page-one';
import { PageTwo } from './page-two/page-two';

export const routes: Routes = [
    { path: '', redirectTo: 'page-one', pathMatch: 'full' },
    { path: 'page-one', component: PageOne },
    { path: 'page-two', component: PageTwo}
];
