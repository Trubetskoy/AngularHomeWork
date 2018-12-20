import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';
   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {RelaxComponent} from './components/relax/relax.component';
import {WorkComponent} from './components/work/work.component';
import {NewsComponent} from './components/news/news.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RelaxComponent,
    WorkComponent,
    NewsComponent,
    
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
    
       
  ],

  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
