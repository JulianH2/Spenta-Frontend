import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ticket-scanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-scanner.component.html',
  styleUrls: ['./ticket-scanner.component.scss']
})
export class TicketScannerComponent {

  constructor(private location: Location) {}

  closeScanner(): void {
    this.location.back();
  }
}