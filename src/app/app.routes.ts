import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { ErrorPageComponent } from 'isc-shared-angular';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent,
  },

  {
    path: 'error-403',
    component: ErrorPageComponent,
    data: { code: 403 },
  },
  {
    path: 'error-404',
    component: ErrorPageComponent,
    data: { code: 404 },
  },
  {
    path: 'error-500',
    component: ErrorPageComponent,
    data: { code: 500 },
  },

  {
    path: '**',
    redirectTo: '/error-404',
  },
];
