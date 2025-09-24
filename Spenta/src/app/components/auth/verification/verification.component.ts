import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent {
  constructor(private router: Router) {}

  verifyCode(): void {
    this.router.navigate(['/app/dashboard']);
  }
}