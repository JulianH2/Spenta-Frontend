import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../../shared/header/header.component";

@Component({
  selector: 'app-market-view',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.scss']
})
export class MarketViewComponent { }