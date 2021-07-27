import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScoreGuard implements CanActivate {
  constructor(private router: Router,private usuarioService:UsuarioService){}
  //si escore es >3.0
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
     debugger;
      this.usuarioService.getUser(route.paramMap.get('usuario')).then(
        (data)=>{
          if(data.score>30.0)
          {
            return true;
          }
        }
      );
      this.router.navigate(['']);
      alert("Usuario con score menor a 30.0")
      return false;
  }
  
  
}
