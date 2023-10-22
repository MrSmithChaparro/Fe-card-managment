import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isMenuOpen: boolean = false;
  selectedCard: string = 'card1';

  toggleMenu() {
    const menu = document.querySelector('.responsive-menu');
    menu?.classList.toggle('show-menu');
  }
}

