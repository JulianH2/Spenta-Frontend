import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  notifications = [
    {
        icon: 'bi-shield-check',
        color: 'success',
        title: 'Transacción Segura',
        description: 'Tu pago a "Amazon" de $899.00 fue validado exitosamente.',
        time: 'Hace 5 minutos'
    },
    {
        icon: 'bi-exclamation-triangle',
        color: 'warning',
        title: 'Alerta de Gasto',
        description: 'Has superado tu presupuesto mensual en la categoría "Comida".',
        time: 'Hace 2 horas'
    },
    {
        icon: 'bi-gem',
        color: 'info',
        title: 'Meta Alcanzada',
        description: '¡Felicidades! Completaste tu meta de ahorro para "Vacaciones".',
        time: 'Hace 1 día'
    }
  ];
}
