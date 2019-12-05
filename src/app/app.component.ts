import {LicenseManager} from '@ag-grid-enterprise/core';
import {Component} from '@angular/core';
import {SearchResultTableRow} from './models/search-result-table-row.model';
import {SearchItem} from './models/search-result.model';
import {DataLoaderService} from './services/data-loader.service';

@Component({
  selector: 'app-root',
  template: `
      <app-table [items]="items"></app-table>
  `,
})
export class AppComponent {

  items: SearchResultTableRow[];

  constructor(private dataLoaderService: DataLoaderService) {
    LicenseManager.setLicenseKey('what is love baby you want me');
    this.dataLoaderService.loadSearchResults().subscribe(data => {
      this.items = data.items.map(this.buildRow);
    });
  }

  private buildRow(item: SearchItem): SearchResultTableRow {
    return {
      imageUrl: item.snippet.thumbnails.medium.url,
      videoInfo: {
        title: item.snippet.title,
        url: 'https://www.youtube.com/watch?v=' + item.id.videoId
      },
      description: item.snippet.description,
      published: item.snippet.publishedAt
    };
  }
}
