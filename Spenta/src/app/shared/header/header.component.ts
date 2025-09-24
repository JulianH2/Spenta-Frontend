import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() showBackButton: boolean = false;
  @Input() showNotifications: boolean = false;

  constructor(private location: Location, private router: Router) {}

  goBack(): void {
    this.location.back();
  }

  goToNotifications(): void {
    this.router.navigate(['/app/notifications']);
  }
}