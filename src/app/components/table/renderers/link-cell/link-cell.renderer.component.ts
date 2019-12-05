import {ICellRendererAngularComp} from '@ag-grid-community/angular';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-link-cell',
  template: `
      <div class="link-container" (click)="openLink()">
          {{link.title}}
      </div>
  `,
  styleUrls: ['link-cell.renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkCellRendererComponent implements ICellRendererAngularComp {

  link: { title: string, url: string };

  refresh(params: any): boolean {
    return false;
  }


  agInit(params): void {
    this.link = params.value;
  }


  openLink() {
    // maybe use eventListener on api
    window.open(this.link.url, '_self');
  }
}
