//Global Variables
let id = 0; //Assign an ID to update and delete
let tourDates = []; //store the entities we create, read, update, and delete

//Data Structures -- pushing this class to our table
class TourDate {
	constructor(date, city, location, id) {
		this.date = date;
		this.city = city;
		this.location = location;
		this.id = id;

	}

	createTourDate() {
		tourDates.push(new TourDate(this.date, this.city, this.location, this.id));
	}

	// editTourDate(id) {
	// 	return tourDates[id];
	}

//}

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
			let tourDate = new TourDate(date, city, location, id);
			tourDate.createTourDate();
			console.log(tourDates);
			document.getElementById('date').value = '';
			document.getElementById('city').value = '';
			document.getElementById('location').value = '';
			id++;

			return dom.renderTourDates();
			//When we click, we want to get the value from each input and pass tht input into our
			//tourDate class and then call upon on createTourDate method
			//Grab each value from each input and pass as an instance of the TourDate Class
		});
	}

	// renderTourDates() {
	// 	this.tourDates = tourDates;
	// 	$('#test').empty();
	// 	for (let tourDate of tourDates) {
	// 		$('#test').prepend(
	// 			`
	// 			<div class="card">
	// 			<div class="card-header">
	// 				<h3>${tourDate.date}</h3>
	// 			</div>
	// 			<div class="card-body">

	// 			</div>
	// 			`
	// 		)
	// 	}
	// }


	renderTourDates() {
		this.tourDate = tourDates;
		// console.log(tourDates);
		$('.test').empty();
		for (let tourDate of tourDates) {
			$('#tour-table').prepend(
				`<tr class="text-center test">
				<td><button class="btn btn-primary" id="${id}" onclick="dom.editButton()">Edit</button></td>
				<td>${tourDate.date}</td>
				<td>${tourDate.city}</td>
				<td>${tourDate.location}</td>
				<td><button class="btn btn-danger" onclick="dom.deleteButton()">Delete</button></td>
				</tr><br>
				`
			);
		}
	}

	editButton(id) {
		// get element by id
		// accept new input
		// push new input to table
		// let ham = this.id;
		// let turtle = tourDates.splice(ham, 0, "");
		// console.log(turtle);
		// dom.renderTourDates();

	}

	//getAllTourDates -- get all info anytime we make changes to the DOM -- Display --Richie
	//deleteTourDate -- delete a tour by id? -- Jayme
	//take an instance of TourDate and push to tourDates array -- Janel
	//updateTourDate -- get the TourDate by id to make changes -- Kristina
}
let dom = new DOMManager();
// dom.editButton();
dom.addButton();
id++;
dom.renderTourDates();
//
