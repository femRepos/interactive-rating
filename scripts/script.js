const ratingDOM = document.getElementById("rating");
const ratePage = document.getElementById("rate-state");
const thankPage = document.getElementById("thank-state");
const form = document.querySelector(".ratings-container");
let rating;

// prevent from submitting to another page
form.onsubmit = (e) => {
	e.preventDefault();
	console.log("submitted");
	const formData = new FormData(e.target);
	const formProps = Object.fromEntries(formData);
	rating = formProps.rating;
	ratingDOM.textContent = rating + "";

	// flip pages
	ratePage.style.display = "none";
	thankPage.style.display = "block";
};
