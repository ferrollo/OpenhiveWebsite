import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private scrollSubject = new Subject<string>();

  sendScrollRequest(sectionId: string): void {
    this.scrollSubject.next(sectionId);
  }

  getScrollRequest(): Observable<string> {
    return this.scrollSubject.asObservable();
  }


  constructor() { }
}
