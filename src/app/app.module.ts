import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModuloRoteamento } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { InfocontentsComponent } from './infocontents/infocontents.component';
import { ListCoinsComponent } from './list-coins/list-coins.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    InfocontentsComponent,
    ListCoinsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModuloRoteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
