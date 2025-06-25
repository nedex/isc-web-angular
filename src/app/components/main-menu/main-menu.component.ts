import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { appVersion } from '@env/app-version';
import { ThemeService, ThemeToggleComponent } from 'isc-shared-angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-menu',
  imports: [
    RouterModule,

    MatButtonModule,
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

  protected readonly currentVersion = appVersion.version;

  protected readonly triggerThemeToggle = new Subject<void>();
  protected readonly darkMode = this.themeService.darkMode;
}
