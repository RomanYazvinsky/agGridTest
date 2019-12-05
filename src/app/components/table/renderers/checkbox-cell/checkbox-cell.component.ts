import {ICellRendererAngularComp} from '@ag-grid-community/angular';
import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-checkbox-cell',
  template: `
      <div (click)="onSelectionChange($event)"
           [classList]="'ag-icon ' + (checked ? 'ag-icon-checkbox-checked':'ag-icon-checkbox-unchecked')">
      </div>
  `
})
export class CheckboxCellComponent implements ICellRendererAngularComp, OnDestroy {
  private node: any;

  checked: boolean;

  agInit({node}): void {
    this.node = node;
    this.node.addEventListener('rowSelected', this.selectionChangedListener);
  }

  onSelectionChange(event: MouseEvent) {
    event.stopPropagation();
    this.checked = !this.checked;
    this.node.setSelected(this.checked);
  }

  refresh(params: any): boolean {
    return false;
  }

  private selectionChangedListener = ({node}) => this.checkSelection(node);


  private checkSelection({selected}: { selected: boolean }) {
    this.checked = selected;
  }

  ngOnDestroy(): void {
    this.node.removeEventListener('rowSelected', this.selectionChangedListener);
  }

}
