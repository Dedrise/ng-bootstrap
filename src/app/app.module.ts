/*=========================================================================
                                                          Angular Module Imports
=========================================================================*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*=========================================================================
                                                          Component Imports
=========================================================================*/
import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, FormsModule, HttpModule ],
    bootstrap: [ AppComponent ],
    providers: [ ]
})
export class AppModule { }
