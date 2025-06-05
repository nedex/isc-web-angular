import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IscSharedAngularComponent } from 'isc-shared-angular'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IscSharedAngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'isc-web-angular';
}
