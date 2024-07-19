import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { EstudoComponent } from './componentes/estudo/estudo.component';
import { DesenvolvimentoComponent } from './componentes/desenvolvimento/desenvolvimento.component';
import { CrescimentoentoComponent } from './componentes/crescimentoento/crescimentoento.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'sobre', component: SobreComponent },
    { path:'estudo', component: EstudoComponent },
    { path: 'desenvolvimento', component: DesenvolvimentoComponent },
    { path: 'crescimento', component: CrescimentoentoComponent }
];
