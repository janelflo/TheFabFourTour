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
}

//DOM Manuipulation -- Janel, Kristina,
class DOMManager {
	//getAllTourDates -- get all info anytime we make changes to the DOM -- Display --Richie
	//deleteTourDate -- delete a tour by id? -- Jayme
	//createTourDate -- take an instance of TourDate and push to tourDates array -- Janel
	//updateTourDate -- get the TourDate by id to make changes -- Kristina
}

//