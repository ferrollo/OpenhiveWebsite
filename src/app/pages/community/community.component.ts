import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {
  userCount: number = 0;

  ngOnInit() {
    this.fetchUserCount();
  }

  joinDiscord() {
    window.open('https://discord.com/invite/your-channel', '_blank');
  }

  fetchUserCount() {
    // Qui dovresti chiamare il tuo servizio per ottenere il numero di utenti
    // Per ora, useremo un valore fisso per l'esempio
    this.userCount = 1234; // Questo dovrebbe essere il valore restituito dal tuo servizio
  }
}
