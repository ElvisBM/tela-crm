import { ListCoinsComponent } from './list-coins/list-coins.component';
import { Routes, RouterModule } from '@angular/router';
import { InfocontentsComponent } from './infocontents/infocontents.component';

const rotasApp: Routes = [
  {path: '', component: InfocontentsComponent},
  {path: 'blockchain', component: ListCoinsComponent},
  {path: '**', redirectTo: ''}
];

export const ModuloRoteamento = RouterModule.forRoot(rotasApp);
