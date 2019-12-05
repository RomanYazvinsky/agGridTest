import {ICellRendererAngularComp} from '@ag-grid-community/angular';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-image-cell.renderer',
  template: `
    <div [style.background-image]="'url(' + src + ')'" class="image-container"></div>
  `,
  styleUrls: ['./image-cell.renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCellRendererComponent implements ICellRendererAngularComp {
  src: string;

  refresh(params: any): boolean {
    return false;
  }

  agInit(params): void {
    this.src = params.value;
  }
}
