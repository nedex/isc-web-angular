import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DomSanitizer, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { socialsIcons, SocialType } from 'isc-shared-angular';

function initializeIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  iconRegistry.setDefaultFontSetClass('material-symbols-sharp');

  Object.keys(socialsIcons).forEach((iconName) => {
    const svgFile = socialsIcons[iconName as SocialType];
    iconRegistry.addSvgIcon(iconName, sanitizer.bypassSecurityTrustResourceUrl(svgFile));
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAppInitializer(() => {
      const matIconRegistry = inject(MatIconRegistry);
      const domSanitizer = inject(DomSanitizer);
      initializeIcons(matIconRegistry, domSanitizer);
    }),
  ],
};
