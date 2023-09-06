import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchdataComponent } from "./components/fetchdata/fetchdata.component";
import {HomeComponent} from "./components/home/home.component"
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"fetch" , component:FetchdataComponent},
  {path:"" , component:MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
