import {TableComponent} from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;

  beforeEach(() => {
    component = new TableComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return context menu with default items', () => {
    const result = component.getContextMenu({column: {colDef: {} as any}, value: {}, defaultItems: ['copy']});
    expect(result.length).toEqual(1);
  });

  it('should return context menu with open in new tab item', () => {
    const result = component.getContextMenu({column: {colDef: {cellRenderer: 'linkCell'} as any}, value: {}, defaultItems: ['copy']});
    expect(result.length).toEqual(2);
  });

  it('should handle grid ready and fit columns', () => {
    const api = {
      sizeColumnsToFit: () => {
      }
    };
    const spy = spyOn(api, 'sizeColumnsToFit').and.callThrough();
    component.onGridReady({api});
    expect(spy).toHaveBeenCalled();
  });
});
