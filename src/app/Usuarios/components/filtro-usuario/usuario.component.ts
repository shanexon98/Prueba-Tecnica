import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartDataSets, ChartOptions ,ChartType} from 'chart.js';
import { Label } from 'ng2-charts';
import Swal from 'sweetalert2';
import { usuario } from '../../../core/models/usuario.model';
import { UsuarioService } from '../../../core/services/usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  form:FormGroup;
  listaUsuarios:usuario[]=[];

  validUser:boolean=true;
  mensajeError:string;
  //Gráfica
  public barChartLabels: Label[] =['Seguidores'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [{data:[0],label:'N/A'}];

  constructor( 
  private formBuilder: FormBuilder,
  private usuarioService:UsuarioService
  ) { }

  ngOnInit(): void {
    this.buildUsuario();
  }
  buildUsuario()
  {
    this.form = this.formBuilder.group({
      usuario:["",[Validators.required,Validators.minLength(4)]]
    })
  }

  buscarUsuario()
  {
    let value = this.form.value;
    if(value.usuario.trim()!=="")
    {
      this.usuarioService.get(value.usuario).subscribe(data=>{
        this.listaUsuarios=data;
        this.setData();
      });
     
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Complete la información!',
      });
    }
  }
  validarUsuario()
  {
    let value = this.form.value;
    if(this.form.get('usuario').value==="doublevpartners")
    {
      this.validUser=false;
       this.mensajeError="No puede realizar la busqueda del usuario doublevpartners";
       return false;
    }
    else{
      this.validUser=true;
    }
    if(this.form.get('usuario').errors?.minlength||value.usuario.trim()==="")
    {
      this.mensajeError="Escriba 4 caracteres como minimo";
      return false;
    } 
    if(this.form.get('usuario').errors?.required||value.usuario.trim()==="")
    {
      this.mensajeError="Escriba un usuario";
      return false;
    }
  }
  validarEnvio()
  {
    if(!this.form.invalid&&this.validUser)
    {
      return true;
    }
    return false;
  }
 
  public barChartOptions: ChartOptions = {
    responsive: true,
    
     scales: { xAxes: [{}], yAxes: [{}] },
     plugins: {
       datalabels: {
         anchor: 'end',
         align: 'end',
       }
     }
  };


  setData()
  {
      this.barChartData= [];

      let i=0;
      this.listaUsuarios.length>=10? i=10:i=this.listaUsuarios.length;
      for(let j=0;j<i;j++)
      {
        this.usuarioService.getFollowers(this.listaUsuarios[j].followers_url).subscribe(
          data=>{
             this.barChartData.push({data:[data.length],label:this.listaUsuarios[j].login})
          }
        );
      }
  }


}
