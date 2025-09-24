import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, CurrencyPipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userName = 'Julián';

  recentTransactions = [
    { icon: 'bi-cup-straw', name: 'Starbucks', category: 'Comida', amount: -150.00, type: 'expense' },
    { icon: 'bi-spotify', name: 'Spotify', category: 'Suscripción', amount: -129.00, type: 'expense' },
    { icon: 'bi-cash-coin', name: 'Depósito Nómina', category: 'Ingreso', amount: 15000.00, type: 'income' },
    { icon: 'bi-film', name: 'Cinepolis', category: 'Entretenimiento', amount: -350.00, type: 'expense' },
  ];
}
