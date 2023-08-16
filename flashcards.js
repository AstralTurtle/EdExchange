console.log("flashcards.js loaded");

function updateSlides(set) {
	document.querySelector("#title").innerHTML = set.title;

	let slideInner = document.querySelector(".carousel-inner");
	slideInner.innerHTML = "";
	for (let i = 0; i < set.numCards; i++) {
		// create new term
		let newTerm = document.createElement("p");
		newTerm.classList.add("term");
		newTerm.innerHTML = set.termArr[i];

		// create definition for that term
		let newDef = document.createElement("p");
		newDef.classList.add("description");
		newDef.innerHTML = set.defArr[i];

		// create div to add to slides
		let newDiv = document.createElement("div");
		newDiv.classList.add("carousel-item");
		newDiv.appendChild(newTerm);
		newDiv.appendChild(newDef);

		// set first term to active by default
		if (i == 0) {
			newDiv.classList.add("active");
			console.log(newDiv);
		}
		slideInner.appendChild(newDiv);
	}
}

updateSlides(JSON.parse(localStorage.getItem("set")));

const carousel = document.querySelector("#carouselExample");
const cardBody = document.querySelector(".carousel-inner");

let activeCard;
let term;
let description;

updateCardVariables();

carousel.addEventListener("slid.bs.carousel", updateCardVariables); // runs when you go to previous/next slide
cardBody.addEventListener("click", flipCard);

function updateCardVariables() {
	activeCard = document.querySelector(".active");
	term = activeCard.querySelector(".term");
	description = activeCard.querySelector(".description");
}

function flipCard() {
	if (window.getComputedStyle(term).display == "block") {
		term.style.display = "none";
		description.style.display = "block";
	} else {
		description.style.display = "none";
		term.style.display = "block";
	}
	return;
}
