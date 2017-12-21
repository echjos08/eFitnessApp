import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { NavComponent } from './nav/nav.component';
import { PlayComponent } from './play/play.component';
import { IndexComponent } from './index/index.component';
import { GameService } from './models/game.service';
import { LoginrComponent } from './loginr/loginr.component';
import { PictureChooserComponent } from './widgets/picture-chooser/picture-chooser.component';
import { DateComponent } from './date/date.component';
import { FooterComponent } from './footer/footer.component';
import { ConnectComponent } from './connect/connect.component';
import { WorkoutsComponent } from './workouts/workouts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavComponent,
    PlayComponent,
    IndexComponent,
    LoginrComponent,
    PictureChooserComponent,
    DateComponent,
    FooterComponent,
    ConnectComponent,
    WorkoutsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule,
    RouterModule.forRoot([
        { path: "play", component: PlayComponent },
        { path: "home", component: IndexComponent },
        { path: "login", component: LoginrComponent },
        { path: "workouts", component: WorkoutsComponent}
        { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [ GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
