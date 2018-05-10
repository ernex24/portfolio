import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { FooterComponent } from './components/footer/footer.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {CarouselModule} from 'ngx-bootstrap';
import {TextosWebService} from './services/textos-web.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
      Ng2PageScrollModule,
      CarouselModule.forRoot(),
      HttpModule

  ],
  providers: [ TextosWebService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
