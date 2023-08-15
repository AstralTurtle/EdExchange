// make a class
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
	console.log("term:", term.style.display);
	console.log("description:", description.style.display);

	if (window.getComputedStyle(term).display == "block") {
		term.style.display = "none";
		description.style.display = "block";
	} else {
		description.style.display = "none";
		term.style.display = "block";
	}
	return;
}
