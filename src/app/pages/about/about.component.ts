import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from '../../service/scroll.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {

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
