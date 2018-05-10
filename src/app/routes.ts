import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ProjectComponent} from './components/project/project.component';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

export const app_routes = RouterModule.forRoot(appRoutes,  {useHash: true});
