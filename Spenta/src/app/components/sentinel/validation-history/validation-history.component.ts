import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-validation-history',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './validation-history.component.html',
  styleUrls: ['./validation-history.component.scss']
})
export class ValidationHistoryComponent { }