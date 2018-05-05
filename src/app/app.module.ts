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
import { CalendarComponent } from './calendar/calendar.component';
import { PlusDoComponent } from './plus/plus-do/plus-do.component';
import { PlusDoerComponent } from './plus/plus-doer/plus-doer.component';
import { PlusIdeaComponent } from './plus/plus-idea/plus-idea.component';
import { CalendarDayComponent } from './calendar/calendar-day/calendar-day.component';
import { CalendarWeekComponent } from './calendar/calendar-week/calendar-week.component';
import { CalendarMonthComponent } from './calendar/calendar-month/calendar-month.component';
import { CalendarYearComponent } from './calendar/calendar-year/calendar-year.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlusComponent,
    DoComponent,
    DoerComponent,
    IdeaComponent,
    CalendarComponent,
    PlusDoComponent,
    PlusDoerComponent,
    PlusIdeaComponent,
    CalendarDayComponent,
    CalendarWeekComponent,
    CalendarMonthComponent,
    CalendarYearComponent
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






