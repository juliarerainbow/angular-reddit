import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FavesComponent } from './components/faves/faves.component';

const routes: Routes = [
  {path:'home', component: MainComponent},
  {path:'faves', component: FavesComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// liguria consulting 