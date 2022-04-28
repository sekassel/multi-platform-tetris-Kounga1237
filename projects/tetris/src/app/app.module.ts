import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {GameEngineLibModule} from "../../../game-engine-lib/src/lib/game-engine-lib.module";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GameEngineLibModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
