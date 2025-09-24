import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-expense-categories',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './expense-categories.component.html',
  styleUrls: ['./expense-categories.component.scss']
})
export class ExpenseCategoriesComponent { }