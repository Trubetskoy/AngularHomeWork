import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import { RelaxComponent } from './components/relax/relax.component';
import { WorkComponent } from './components/work/work.component';
import {NewsComponent} from './components/news/news.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'relax', component: RelaxComponent},
{path: 'work', component: WorkComponent},
{path: 'news', component: NewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
