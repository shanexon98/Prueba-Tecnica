import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/filtro-usuario/usuario.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { ScoreGuard } from '../core/guards/score.guard';

const routes: Routes = [
  { path: '',
    component: UsuarioComponent 
  },
  {
    path:'detalle/:usuario',
        // canActivate:[ScoreGuard],
    component: DetalleUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
