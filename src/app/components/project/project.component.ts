import { Component } from '@angular/core';
import {TextosWebService} from '../../services/textos-web.service';
import  { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent {

    proyecto:any = undefined;

    constructor( public _tws: TextosWebService, private route: ActivatedRoute ) {

        route.params.subscribe( parametros => {



            _tws.cargarProyecto( parametros[ 'id' ])
                .subscribe( res => {
                    console.log( res.json() );
                    this.proyecto = res.json();
                })
        });
    }

}
