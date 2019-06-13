import { ProfileService } from './services/profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule} from '@angular/http';


import{FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HighlightDirective,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
