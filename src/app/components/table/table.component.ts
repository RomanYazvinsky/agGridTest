import {AgGridColumn} from '@ag-grid-community/angular';
import {AllModules} from '@ag-grid-enterprise/all-modules/dist/es6/main';
import {Component, Input} from '@angular/core';
import {SearchResultTableRow} from '../../models/search-result-table-row.model';
import {CheckboxHeaderComponent} from './headers/checkbox/checkbox.header.component';
import {DateCellRendererComponent} from './renderers/date-cell/date-cell.renderer.component';
import {ImageCellRendererComponent} from './renderers/image-cell/image-cell.renderer.component';
import {LinkCellRendererComponent} from './renderers/link-cell/link-cell.renderer.component';
import {ButtonToolbarComponent} from './toolbar/button/button.toolbar.component';


type ContextMenuItem = {
    name: string;
    disabled?: boolean;
    shortcut?: string;
    action?: () => void;
    checked?: boolean;
    icon?: HTMLElement | string;
    subMenu?: ContextMenuItem[]
    cssClasses?: string[];
    tooltip?: string;
  }
  | 'separator'
  | 'copy'
  | 'chartRange';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  private _items: SearchResultTableRow[];
  private initialized: boolean;
  private columnApi: any;

  @Input()
  set items(value: SearchResultTableRow[]) {
    this._items = value;
    this.initRowData();
  }

  constructor() {
  }

  selectionColumnVisibility = false;

  statusBar: { statusPanels: any[] } = {
    statusPanels: [
      {
        statusPanel: 'agSelectedRowCountComponent',
        align: 'left'
      }, {
        statusPanel: 'agTotalRowCountComponent',
        align: 'left'
      }, {
        statusPanel: 'selectionToggleToolbarButton',
        align: 'right',
        statusPanelParams: {
          handler: () => this.toggleSelectionColumnVisibility(),
          title: 'Selection mode'
        }
      },
    ]
  };

  frameworkComponents = {
    imageCell: ImageCellRendererComponent,
    linkCell: LinkCellRendererComponent,
    dateCell: DateCellRendererComponent,
    selectionToggleToolbarButton: ButtonToolbarComponent,
    checkboxHeader: CheckboxHeaderComponent
  };


  columnDefs: Partial<AgGridColumn>[] = [{
    headerComponent: 'checkboxHeader',
    suppressMenu: true,
    field: 'checked',
    checkboxSelection: true,
    hide: true,
    width: 42
  },
    {headerName: '', field: 'imageUrl', cellRenderer: 'imageCell', width: 100},
    {headerName: 'Published on', field: 'published', cellRenderer: 'dateCell'},
    {
      headerName: 'Video Title',
      field: 'videoInfo',
      cellRenderer: 'linkCell'
    },
    {
      headerName: 'Description', field: 'description'
    },
  ];

  rowData: SearchResultTableRow[] = [];
  modules = AllModules;


  getContextMenu({defaultItems, column, value}: {
                   defaultItems: ContextMenuItem[],
                   column: { colDef: AgGridColumn },
                   value: any
                 }
  ): ContextMenuItem[] {
    const menu = [...defaultItems];
    if (column.colDef.cellRenderer === 'linkCell') {
      menu.unshift({
        name: 'Open in new tab',
        action: () => window.open(value.url)
      } as ContextMenuItem);
    }
    return menu;
  }

  onGridReady(params) {
    this.initialized = true;
    this.initRowData();
    this.columnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }

  private toggleSelectionColumnVisibility() {
    this.selectionColumnVisibility = !this.selectionColumnVisibility;
    this.columnApi.setColumnVisible('checked', this.selectionColumnVisibility);
  }

  private initRowData() {
    if (!this.initialized || !this._items) {
      return;
    }
    this.rowData = this._items;
  }

}
