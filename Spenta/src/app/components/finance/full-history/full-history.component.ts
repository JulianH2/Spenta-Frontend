import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-full-history',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './full-history.component.html',
  styleUrls: ['./full-history.component.scss']
})
export class FullHistoryComponent { }