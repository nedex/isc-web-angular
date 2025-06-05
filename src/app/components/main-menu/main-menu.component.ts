import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { appVersion } from '@env/app-version';
import { ThemeService, ThemeToggleComponent } from 'isc-shared-angular';
import { Subject } from 'rxjs';
import { bufferTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-menu',
  imports: [
    RouterModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,

    ThemeToggleComponent,
  ],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {
  private readonly themeService = inject(ThemeService);

  protected readonly clicker$ = new Subject<void>();
  protected readonly currentVersion = appVersion.version;

  protected readonly triggerThemeToggle = new Subject<void>();
  protected readonly darkMode = this.themeService.darkMode;

  // constructor() {
  //   this.clicker$
  //     .asObservable()
  //     .pipe(
  //       takeUntilDestroyed(),
  //       bufferTime(5e3),
  //       filter((clicks) => clicks.length >= 5)
  //     )
  //     .subscribe(() => window.alert(`Version: ${this.currentVersion}`));
  // }
}
