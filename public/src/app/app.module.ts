import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { routing } from './app.routes';
import { CommunicateService } from './communicate.service'
import { HttpService} from './http.service'
import { MomentModule } from 'angular2-moment'
import{ RoundPipe } from './round.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteComponent } from './note/note.component'
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuctionsComponent,
    NewComponent,
    EditComponent,
    RoundPipe,
    DashboardComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MomentModule,
    Ng2OrderModule,
  ],
  providers: [ CommunicateService, HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
