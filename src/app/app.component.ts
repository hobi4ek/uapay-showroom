import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'uapay-showroom';
	act1 = '';

	appState = {};




	constructor() {}

	resetSystem(name) {

		name ? this.appState[name] = {} : this.appState = {};
	}
}
