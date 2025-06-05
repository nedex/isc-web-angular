import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { EmbeddedVideoComponent } from 'isc-shared-angular';

@Component({
  selector: 'app-homepage',
  imports: [RouterModule, MatButtonModule, MatCardModule, EmbeddedVideoComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
