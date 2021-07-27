import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './components/filtro-usuario/usuario.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    DetalleUsuarioComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers:[
  ]
})
export class UsuarioModule { }
