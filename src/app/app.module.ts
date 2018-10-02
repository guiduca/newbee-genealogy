import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FamillyMemberComponent } from './familly-member/familly-member.component';
import { FamillyTreeComponent } from './familly-tree/familly-tree.component';
import { GenerationComponent } from './generation/generation.component';

@NgModule({
  declarations: [
    AppComponent,
    FamillyMemberComponent,
    FamillyTreeComponent,
    GenerationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
