import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { DailyComponent } from './daily/daily.component';
import { OverComponent } from './over/over.component';
import { MusicComponent } from './music/music.component';
import { MinigameComponent } from './minigame/minigame.component';
import { EscapeComponent } from './escape/escape.component';
import { FpsComponent } from './fps/fps.component';
import { LectureComponent } from './lecture/lecture.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    DailyComponent,
    OverComponent,
    MusicComponent,
    MinigameComponent,
    EscapeComponent,
    FpsComponent,
    LectureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
