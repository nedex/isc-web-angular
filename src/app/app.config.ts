import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appVersion } from '@env/app-version';
import { socialsIcons, SocialType } from 'isc-shared-angular';
import { routes } from './app.routes';

function initializeIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  iconRegistry.setDefaultFontSetClass('material-symbols-sharp');

  Object.keys(socialsIcons).forEach((iconName) => {
    const svgFile = socialsIcons[iconName as SocialType];
    iconRegistry.addSvgIcon(iconName, sanitizer.bypassSecurityTrustResourceUrl(svgFile));
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideAppInitializer(() => {
      console.info(`Version: %c${appVersion.version}`, 'color: red');

      const matIconRegistry = inject(MatIconRegistry);
      const domSanitizer = inject(DomSanitizer);
      initializeIcons(matIconRegistry, domSanitizer);
    }),
  ],
};
