import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TabBarComponent } from '../../shared/tab-bar/tab-bar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, TabBarComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  constructor(private router: Router) {}

  openTicketScanner(): void {
    this.router.navigate(['/app/scanner']);
  }
}