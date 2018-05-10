import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class TextosWebService {
info: any = {};
cargada:boolean = false;

  constructor( public http:Http) {
    this.http.get('https://ng-portafolio.firebaseio.com/ngx-portfolio:.json')
        .subscribe( data => {
           this.cargada = true;
           this.info = data.json();
        });
    }

    public cargarProyecto( id: string ) {
        return this.http.get(`https://ng-portafolio.firebaseio.com/ngx-portfolio:/proyectos/${ id }.json`);
    }

}
