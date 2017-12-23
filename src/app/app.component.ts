import { Component } from '@angular/core';

@Component({
	selector: "app-root",
	template: `<div>
		<h1>{{title}}</h1>
		<div>Welcome to this component</div>
		</div>
		`
})
export class AppComponent {
  title = 'Eternally Lost Miracle';
}
