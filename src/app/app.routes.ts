import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home', loadComponent: () => import('./components/list-character/list-character.component').then(m => m.ListCharacterComponent)
    },
    {
        path: '**', redirectTo: 'home'
    }
];
