import {IHeaderAngularComp} from '@ag-grid-community/angular';
import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  template: `
      <div (click)="onSelectionChange(!checked)"
           [classList]="'ag-icon ' + (checked ? 'ag-icon-checkbox-checked':'ag-icon-checkbox-unchecked')">
      </div>
  `
})
export class CheckboxHeaderComponent implements IHeaderAngularComp, OnDestroy {

  constructor() {
  }

  private api: any;

  checked: boolean;

  agInit(params): void {
    this.api = params.api;
    this.checkSelection();
    this.api.addEventListener('selectionChanged', this.selectionChangedListener);
  }

  onSelectionChange(value: boolean) {
    this.checked = value;
    this.toggleSelection(value);
  }

  private selectionChangedListener = () => this.checkSelection();

  private toggleSelection(value) {
    if (!value) {
      this.api.deselectAll();
    } else {
      this.api.selectAll();
    }
  }

  private checkSelection() {
    const selectedRowsCount = this.api.getSelectedRows().length;
    let rowsCount = 0;
    this.api.forEachNode(() => rowsCount++);
    this.checked = rowsCount === selectedRowsCount && selectedRowsCount > 0;
  }

  ngOnDestroy(): void {
    this.api.removeEventListener('selectionChanged', this.selectionChangedListener);
  }

}
