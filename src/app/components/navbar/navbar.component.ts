import { ScrollService } from './../../service/scroll.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menuValue: boolean = false;
  menu_icon: string = "bi bi-list";

  constructor(private scrollService: ScrollService) { }

  openMenu() {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menu_icon ? 'bi bi-x' : 'bi bi-list';
  }

  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }

  scrollToSection(sectionId: string) {
    this.scrollService.sendScrollRequest(sectionId);
    this.closeMenu();
  }

}
