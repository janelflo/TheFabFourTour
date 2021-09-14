//Global Variables
let id = 0; //Assign an ID to update and delete
let tourDates = []; //store the entities we create, read, update, and delete

//Data Structures -- pushing this class to our table
class TourDate {
	constructor(date, city, location) {
		this.date = date;
		this.city = city;
		this.location = location;
		this.id = id;

	}

	createTourDate() {
		tourDates.push(new TourDate(this.date, this.city, this.location));
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
			console.log(id);

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
			$('#tour-table').append(
				`<tr class="text-center test">
				<td><button class="btn btn-primary edit-button" id="${tourDate.id}" onclick="dom.editButton()">Edit</button></td>
				<td>${tourDate.date}</td>
				<td>${tourDate.city}</td>
				<td>${tourDate.location}</td>
				<td><button class="btn btn-danger delete-button" onclick="dom.deleteButton()">Delete</button></td>
				</tr><br>
				`
			);
		}
	}

	editButton(id) {
		// get element by id
		// tourDate = this.tourDate;
		// id = this.id;
		id = document.getElementById(`${tourDate.id}`);
		console.log(id);
		let classes = document.getElementsByClassName('edit-button');
		console.log(classes);
		// console.log(classes[`${tourDate.id}`]);
		// console.log(id);
		console.log(`${tourDate.id}`);


		for (let i = 0; i < tourDates.length; i++) {
			if (i == id) {`
				<input type="date" id="new-date" class="form-control">`;
				tourDates[id].date.prepend("new-date");
				
			}
		// 	[id].date.push("new-date").value;
		}
		// accept new input
		// push new input to table
		// let ham = this.id;
		// let turtle = tourDates.splice(ham, 0, "");
		// console.log(turtle);
		dom.renderTourDates();

	}

	updateTourDate() {
		let newDate = document.getElementById('date').value;
		let newCity = document.getElementById('city').value;
		let newLocation = document.getElementById('location').value;
		let updatedTourDate = new TourDate(newDate, newCity, newLocation, id);
			tourDates[id].splice(id, 0, updatedTourDate);
		}

	//getAllTourDates -- get all info anytime we make changes to the DOM -- Display --Richie
	//deleteTourDate -- delete a tour by id? -- Jayme
	//take an instance of TourDate and push to tourDates array -- Janel
	//updateTourDate -- get the TourDate by id to make changes -- Kristina
}
let dom = new DOMManager();
// dom.editButton();
dom.addButton();
dom.editButton();
dom.renderTourDates();
//
