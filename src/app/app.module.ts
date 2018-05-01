import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {HttpClient, HttpClientModule} from '@angular/common/http';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PlusComponent } from './plus/plus.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AppRoutingModule} from './app-routing.module';
// import {CalendarModule} from './calendar/calendar.module';
import { DoComponent } from './do/do.component';
import { DoerComponent } from './doer/doer.component';
import { IdeaComponent } from './idea/idea.component';
import { ModalComponent } from './do/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlusComponent,
    DoComponent,
    DoerComponent,
    IdeaComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
     BrowserModule , AngularFontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    // CalendarModule,
    // CalendarModule.forRoot()
    NgbModule.forRoot()
// HttpClient,
    // HttpClientModule
    // RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






