import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  LucideAngularModule,
  ChefHat,
  Flame,
  Star,
  Phone,
  MapPin,
  Clock3,
  UtensilsCrossed,
} from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  readonly ChefHat = ChefHat;
  readonly Flame = Flame;
  readonly Star = Star;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly Clock3 = Clock3;
  readonly UtensilsCrossed = UtensilsCrossed;
}