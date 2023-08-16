let sampleData = {
	"Unit 1": {
		proton: "positively charged particle",
		electron: "negatively charged particle",
		solute: "thing being dissolved in a solution",
	},
	description: "Chemistry",

	"Unit 2": {
		"1 + 1": "2",
		"2 * 3": "6",
	},
	description: "Math",
};

function updateSlides(cardTitle) {
	document.querySelector("#title").innerHTML = cardTitle;

	let slideInner = document.querySelector(".carousel-inner");
	slideInner.innerHTML = "";
	let set = Object.entries(sampleData[cardTitle]);

	for (let i = 0; i < set.length; i++) {
		let key = set[i][0];
		let value = set[i][1];

		// create new term
		let newTerm = document.createElement("p");
		newTerm.classList.add("term");
		newTerm.innerHTML = key;

		// create definition for that term
		let newDef = document.createElement("p");
		newDef.classList.add("description");
		newDef.innerHTML = value;

		// create div to add to slides
		let newDiv = document.createElement("div");
		newDiv.classList.add("carousel-item");
		newDiv.appendChild(newTerm);
		newDiv.appendChild(newDef);

		// set first term to active by default
		if (i == 0) {
			newDiv.classList.add("active");
		}

		document.querySelector(".carousel-inner").appendChild(newDiv);
	}
}

updateSlides("Unit 1");

const carousel = document.querySelector("#carouselExample");
const cardBody = document.querySelector(".carousel-inner");

let activeCard;
let term;
let description;

updateCardVariables();

carousel.addEventListener("slid.bs.carousel", updateCardVariables); // runs when you go to previous/next slide
cardBody.addEventListener("click", flipCard);

function updateCardVariables() {
	activeCard = document.querySelector(".carousel-item.active");
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
