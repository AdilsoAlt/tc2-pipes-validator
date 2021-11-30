import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacaAutoAntigoPipe } from './placa-auto-antigo.pipe';
import { PlacaAutoMercosulPipe } from './placa-auto-mercosul.pipe';
import { TelBrPipe } from './tel-br.pipe';
import { TelUSPipe } from './tel-us.pipe';
import { NomeABNTPipe } from './nome-abnt.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlacaAutoAntigoPipe,
    PlacaAutoMercosulPipe,
    TelBrPipe,
    TelUSPipe,
    NomeABNTPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
