import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftingComponent } from './gifting/gifting.component';
import { LearnComponent } from './learn/learn.component';
import { PlantCareComponent } from './plant-care/plant-care.component';
import { PlantersComponent } from './planters/planters.component';
import { PlantsComponent } from './plants/plants.component';
import { SeedsComponent } from './seeds/seeds.component';

const routes: Routes = [
  { path: 'Plants', component: PlantsComponent},
  { path: 'Seeds', component: SeedsComponent},
  { path: 'Planters', component: PlantersComponent },
  {path:'PlantCare', component: PlantCareComponent},
  {path:'Learn', component : LearnComponent},
  {path:'Gifting', component : GiftingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
