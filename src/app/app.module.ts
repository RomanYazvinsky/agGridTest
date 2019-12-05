import {AgGridModule} from '@ag-grid-community/angular';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CheckboxHeaderComponent} from './components/table/headers/checkbox/checkbox.header.component';
import {DateCellRendererComponent} from './components/table/renderers/date-cell/date-cell.renderer.component';
import {ImageCellRendererComponent} from './components/table/renderers/image-cell/image-cell.renderer.component';
import {LinkCellRendererComponent} from './components/table/renderers/link-cell/link-cell.renderer.component';
import {TableComponent} from './components/table/table.component';
import {ButtonToolbarComponent} from './components/table/toolbar/button/button.toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ImageCellRendererComponent,
    LinkCellRendererComponent,
    DateCellRendererComponent,
    ButtonToolbarComponent,
    CheckboxHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([
      CheckboxHeaderComponent,
      ButtonToolbarComponent,
      ImageCellRendererComponent,
      LinkCellRendererComponent,
      DateCellRendererComponent
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
