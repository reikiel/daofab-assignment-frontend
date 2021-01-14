import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './parent/parent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {  MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { SortDirective } from './directive/sort.directive';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { ParentChildComponent } from './parent-child/parent-child.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ParentComponent,
    SortDirective,
    routingComponents,
    ParentChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
