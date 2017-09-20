import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// our power components
//
import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { BeingComponent } from './power/being/being.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    BeingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
