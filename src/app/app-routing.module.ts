import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { TitleScreenComponent } from './title-screen/title-screen.component';

const routes: Routes = [
  {path: '', component: TitleScreenComponent},
  {path: 'main', component: MainSiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
