import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PeopleComponent } from './people/people.component';
import { PersonFormComponent } from './person-form/person-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PeopleComponent,
    PersonFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
