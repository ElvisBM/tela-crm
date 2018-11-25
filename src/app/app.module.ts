import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModuloRoteamento } from './app.routes';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { InfocontentsComponent } from './infocontents/infocontents.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    InfocontentsComponent
  ],
  imports: [
    BrowserModule,
    ModuloRoteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
