import { Component } from '@angular/core';
import { GuideService } from './guide/guide.service';

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	providers: [GuideService]
})
export class AppComponent {
  title = 'Eternally Lost Miracle';
}
