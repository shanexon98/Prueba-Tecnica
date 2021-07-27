import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from '../../models/usuario.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  async getUser(usuario:string)
  {
      return this.http.get<usuario>(`${environment.url_api}/${usuario}`).toPromise().then(data=>{
        return data;
      });
  }
  get(usuario:string):Observable<usuario[]>{
    return this.http.get(`https://api.github.com/search/users?q=${usuario}`).pipe(
      map((res:any)=>{
        return res.items;
      })
    )
  }
  getFollowers(api_url:string):Observable<usuario[]>
  {
    return this.http.get<usuario[]>(api_url);
  }
}
