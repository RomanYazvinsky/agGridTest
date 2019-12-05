import {IStatusPanelAngularComp} from '@ag-grid-community/angular';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-table-toolbar-button',
  template: `
      <div>
          <div class="toolbar-button" (click)="handler()">{{title}}</div>
      </div>
  `,
  styleUrls: ['./button.toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonToolbarComponent implements IStatusPanelAngularComp {

  title: string;
  handler: () => void;

  agInit(params): void {
    this.title = params.title;
    this.handler = params.handler;
  }
}
