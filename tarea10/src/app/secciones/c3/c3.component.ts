import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {

  tar="";
  desc="";
  tareas: { tar: string; desc: string }[] = [];

  guardar() {
    if(this.tar!= ''){
      this.tareas.push({ tar: this.tar, desc: this.desc });
      this.tar ="";
      this.desc ="";
    }
  }
  eliminar(indice:number){
    this.tareas.splice(indice,1)
  }
}
