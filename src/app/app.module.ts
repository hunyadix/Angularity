import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { GuideComponent } from './guide/guide.component';
import { AboutComponent } from './about/about.component'


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "tips", component: GuideComponent },
      { path: "about", component: AboutComponent }
    ])
  ],
  declarations: [
    AppComponent,
    GuideComponent,
    AboutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
