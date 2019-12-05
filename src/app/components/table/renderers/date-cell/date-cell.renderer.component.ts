import {ICellRendererAngularComp} from '@ag-grid-community/angular';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-date-cell',
  template: `
      {{date | date:'medium'}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateCellRendererComponent implements ICellRendererAngularComp {
  date: Date;
  refresh(params: any): boolean {
    return false;
  }

  agInit(params): void {
    this.date = params.value;
  }


}
