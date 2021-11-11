import { Component, OnInit } from '@angular/core';
declare let L;
import '../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor() {

	}

	ngOnInit() {
		const map = L.map('map').setView([23.764238, 90.371098], 13);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		L.Routing.control({
			waypoints: [
				L.latLng(23.774717, 90.365915),
				L.latLng(23.750307, 90.394350)
			],
			lineOptions: {
				styles: [{color: 'black', opacity: 1, weight: 5}]
			 }
		}).addTo(map);
	}

}
