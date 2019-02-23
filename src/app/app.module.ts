import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RelaxComponent } from './components/relax/relax.component';
import { WorkComponent } from './components/work/work.component';
import { NewsComponent } from './components/news/news.component';
import { MatListModule } from '@angular/material/list';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component'
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RelaxComponent,
    WorkComponent,
    NewsComponent,
    ListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbModule,
    FormsModule,
    ButtonModule,
    ChartModule,
    MatListModule,
    MatTableModule
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
