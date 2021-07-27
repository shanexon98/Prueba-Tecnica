import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { usuario } from '../../../core/models/usuario.model';
import { UsuarioService } from '../../../core/services/usuario/usuario.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  usuario:usuario = new usuario();
  constructor(private route:ActivatedRoute,private UsuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.fetchUsuario();
  }
  fetchUsuario()
  {
     this.UsuarioService.getUser(this.route.snapshot.paramMap.get('usuario')).then(
      (data)=>{
        this.usuario=data;
      }
    );
  }
}
