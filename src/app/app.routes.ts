import { Routes } from '@angular/router';
import { MultistepformComponent } from './multistepform/multistepform.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { AddonsComponent } from './addons/addons.component';
import { SummaryComponent } from './summary/summary.component';
import { PlanComponent } from './plan/plan.component';

export const routes: Routes = [
  {
    path: '',
    component: PersonalinfoComponent,
  },
  {
    path: 'plan',
    component: PlanComponent,
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
