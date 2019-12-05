import {fakeAsync, tick} from '@angular/core/testing';
import {EMPTY, of} from 'rxjs';
import {AppComponent} from './app.component';
import {SearchResult} from './models/search-result.model';
import {DataLoaderService} from './services/data-loader.service';

describe('AppComponent', () => {
  let component: AppComponent;
  const dataLoaderService = {
    loadSearchResults: () => of({
      items: [
        {
          id: {},
          snippet: {
            title: 'Test',
            thumbnails: {
              medium: {}
            }
          }
        }
      ]
    } as SearchResult)
  } as DataLoaderService;
  beforeEach(() => {
    component = new AppComponent(dataLoaderService);
  });

  it('should create the app', fakeAsync(() => {
    component = new AppComponent(dataLoaderService);
    tick(10);
    expect(component.items).toBeDefined('Service does not work');
    spyOn(dataLoaderService, 'loadSearchResults').and.returnValue(EMPTY);
    component = new AppComponent(dataLoaderService);
    tick(10);
    expect(component.items).toBeUndefined();
  }));
});
