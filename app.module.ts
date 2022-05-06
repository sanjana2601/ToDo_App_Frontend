import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { BodyComponentComponent } from './body-component/body-component.component';
import { TodoComponentComponent } from './body-component/todo-component/todo-component.component';
import { InprogressComponentComponent } from './body-component/inprogress-component/inprogress-component.component';
import { DoneComponentComponent } from './body-component/done-component/done-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BodyComponentComponent,
    TodoComponentComponent,
    InprogressComponentComponent,
    DoneComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
