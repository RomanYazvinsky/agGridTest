import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SearchResult} from '../models/search-result.model';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
  // tslint:disable-next-line:max-line-length
  private static readonly TEST_LINK = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john';

  constructor(private http: HttpClient) {
  }

  loadSearchResults(): Observable<SearchResult> {
    return this.http.get(DataLoaderService.TEST_LINK).pipe(map((result => result as SearchResult)));
  }
}
