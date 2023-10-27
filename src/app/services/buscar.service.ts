import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTermSubject = new BehaviorSubject<string>('');

  setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }

  getSearchTermObservable() {
    return this.searchTermSubject.asObservable();
  }
}
