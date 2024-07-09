import { Routes } from '@angular/router';
import { MultistepformComponent } from './multistepform/multistepform.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { AddonsComponent } from './addons/addons.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
  {
    path: '',
    component: PersonalinfoComponent,
  },
  {
    path: 'addons',
    component: AddonsComponent,
  },
  {
    path: 'summary',
    component: SummaryComponent,
  },
];
