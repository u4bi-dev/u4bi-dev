import { RouterModule, Routes } from '@angular/router';

import{ MainComponent } from '../main/main.component';

const routes: Routes =[
  {path: '', component: MainComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
