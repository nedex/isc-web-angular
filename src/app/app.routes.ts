import { Routes } from '@angular/router';
import { ErrorPageComponent } from 'isc-shared-angular';
import { BeneficenzaPageComponent } from './components/beneficenza-page/beneficenza-page.component';
import { CommunityPageComponent } from './components/community-page/community-page.component';
import { ContattiPageComponent } from './components/contatti-page/contatti-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'community',
    component: CommunityPageComponent,
  },
  {
    path: 'beneficenza',
    component: BeneficenzaPageComponent,
  },
  {
    path: 'contatti',
    component: ContattiPageComponent,
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
