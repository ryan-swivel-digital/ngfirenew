import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo:'weather'},
{path: 'weather', 
loadChildren: './weather/weather.module#WeatherModule'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
