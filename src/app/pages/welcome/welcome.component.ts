import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  restaurantName = 'Délices';

  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/menu']);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }
}