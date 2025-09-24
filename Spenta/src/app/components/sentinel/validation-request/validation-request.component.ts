import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-validation-request',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './validation-request.component.html',
  styleUrls: ['./validation-request.component.scss']
})
export class ValidationRequestComponent {}