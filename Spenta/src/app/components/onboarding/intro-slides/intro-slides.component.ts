import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-slides',
  standalone: true,
  templateUrl: './intro-slides.component.html',
  styleUrls: ['./intro-slides.component.scss']
})
export class IntroSlidesComponent {
  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}