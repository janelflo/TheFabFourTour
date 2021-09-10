//Global Variables
let id = 0; //Assign an ID to update and delete
let tourDates = []; //store the entities we create, read, update, and delete

//Data Structures -- pushing this class to our table
class TourDate {
	constructor(date, city, location) {
		this.date = date;
		this.city = city;
		this.location = location;
	}

	createTourDate() {
		tourDates.push(new TourDate(this.date, this.city, this.location));
	}
}
let tourDate = new TourDate();
//tourDate.createTourDate();
//console.log(tourDate.createTourDate());
//console.log(tourDates);

//DOM Manipulation
class DOMManager {
	addButton() {
		document.getElementById('add-button').addEventListener('click', () => {
			let date = document.getElementById('date').value;
			let city = document.getElementById('city').value;
			let location = document.getElementById('location').value;
			let tourDate = new TourDate(date, city, location);
			tourDate.createTourDate();
			console.log(tourDates);
			//When we click, we want to get the value from each input and pass tht input into our
			//tourDate class and then call upon on createTourDate method
			//Grab each value from each input and pass as an instance of the TourDate Class
		});
	}

	//getAllTourDates -- get all info anytime we make changes to the DOM -- Display --Richie
	//deleteTourDate -- delete a tour by id? -- Jayme
	//take an instance of TourDate and push to tourDates array -- Janel
	//updateTourDate -- get the TourDate by id to make changes -- Kristina
}
let dom = new DOMManager();
dom.addButton();
//
