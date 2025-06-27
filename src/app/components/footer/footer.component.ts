import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { environment } from '@env/environment';
import { SocialType } from 'isc-shared-angular';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, MatIconModule, MatTooltipModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly discordIscUrl = environment.discordIscUrl;

  protected readonly socials = [
    {
      url: environment.twitchUrl,
      icon: SocialType.Twitch,
      tooltip: 'Seguici su Twitch',
    },
    {
      url: environment.discordIscUrl,
      icon: SocialType.Discord,
      tooltip: 'Entra nel nostro Discord',
    },
    {
      url: environment.instagramUrl,
      icon: SocialType.Instagram,
      tooltip: 'Seguici su Instagram',
    },
    {
      url: 'https://www.youtube.com/@ItalianSpeedrunCommunity',
      icon: SocialType.Youtube,
      tooltip: 'Seguici su YouTube',
    },
  ];
}
