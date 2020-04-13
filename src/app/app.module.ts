import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { CdTimerModule } from 'angular-cd-timer';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NamesComponent } from './names/names.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    NamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdTimerModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
