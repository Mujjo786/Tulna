import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountsPageComponent } from './discounts-page/discounts-page.component';
import { YoutubePageComponent } from './youtube-page/youtube-page.component';

const routes: Routes = [
  {path:'discount',component:DiscountsPageComponent},
  {path:'youtube',component:YoutubePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
