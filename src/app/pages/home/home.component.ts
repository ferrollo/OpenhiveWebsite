import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Subscription } from 'rxjs';
import { ScrollService } from '../../service/scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [NavbarComponent]
})
export class HomeComponent implements OnInit, OnDestroy {

  private scrollSubscription!: Subscription;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollSubscription = this.scrollService.getScrollRequest().subscribe(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    });
  }

  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }

}
