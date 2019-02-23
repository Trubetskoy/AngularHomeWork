import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RelaxComponent } from './components/relax/relax.component';
import { WorkComponent } from './components/work/work.component';
import { NewsComponent } from './components/news/news.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'relax', component: RelaxComponent },
  { path: 'work', component: WorkComponent },
  { path: 'news', component: NewsComponent },
  { path: 'list', component: ListComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
