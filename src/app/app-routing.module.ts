import {NgModule} from '@angular/core';
import {PlusComponent} from './plus/plus.component';
import {RouterModule, Routes} from '@angular/router';
// import {MenuComponent} from './menu/menu.component';
import {CalendarComponent} from './calendar/calendar.component';
import {DoComponent} from './do/do.component';
import {DoerComponent} from './doer/doer.component';
import {IdeaComponent} from './idea/idea.component';
import {PlusIdeaComponent} from './plus/plus-idea/plus-idea.component';
import {PlusDoerComponent} from './plus/plus-doer/plus-doer.component';
import {PlusDoComponent} from './plus/plus-do/plus-do.component';
import {VmenuComponent} from './vmenu/vmenu.component';
import {FirebaseComponent} from './firebase/firebase.component';
// first step for create routing in declare an app
const appRoutes: Routes = [
  {path: '' , redirectTo: '/dashboard'  , pathMatch : 'full'},
  {path : 'dashboard' , component: VmenuComponent},
  {path: 'plus' , component: PlusComponent},
  {path: 'calendar' , component: CalendarComponent },
  {path: 'do' , component : DoComponent},
  {path: 'doer' , component: DoerComponent},
  {path: 'idea' , component: IdeaComponent},
  {path: 'plus-do' , component : PlusDoComponent},
  {path: 'plus-doer' , component: PlusDoerComponent},
  {path: 'plus-idea' , component: PlusIdeaComponent},
  {path: 'firebase' , component: FirebaseComponent},
];
// second step routing imports and next export
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})
export class AppRoutingModule {
}
