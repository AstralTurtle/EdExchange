newTerm = document.getElementById("newTerm");
submit = document.getElementById("submitSet");

term1 = document.getElementById("t1");
definiton1 = document.getElementById("d1");

let termCount = 1;
// callback function for add button
newTerm.addEventListener("click", function (event) {
	event.preventDefault();
	createNewCard();
});
function createNewCard() {
	termCount++;
	// create new card div
	const newCard = document.createElement("div");
	newCard.classList.add("newCard", "card", "col");
	// create new card body div
	const newCardBody = document.createElement("div");
	newCardBody.classList.add(
		"newCardBody",
		"card-body",
		"border",
		"border-3",
		"border-dark"
	);
	newCard.appendChild(newCardBody);
	// create card number
	const cardNumber = document.createElement("p");
	cardNumber.classList.add("cardNumber", "text-center");
	cardNumber.innerHTML = termCount;

	newCardBody.appendChild(cardNumber);
	// create term label
	const termLabel = document.createElement("label");
	termLabel.classList.add("termLabel", "form-label", "text-primary", "fw-bold");
	termLabel.innerHTML = "Term:";
	newCardBody.appendChild(termLabel);
	// create term input
	const termInput = document.createElement("input");
	termInput.classList.add("termInput", "form-control");
	termInput.setAttribute("type", "text");
	termInput.setAttribute("id", "t" + termCount);
	termInput.setAttribute("name", "t" + termCount);
	newCardBody.appendChild(termInput);
	// create definition label
	const definitionLabel = document.createElement("label");
	definitionLabel.classList.add(
		"definitionLabel",
		"form-label",
		"text-primary",
		"fw-bold"
	);
	definitionLabel.innerHTML = "Definition:";
	newCardBody.appendChild(definitionLabel);
	// create definition input
	const definitionInput = document.createElement("input");
	definitionInput.classList.add("definitionInput", "form-control");
	definitionInput.setAttribute("type", "text");
	definitionInput.setAttribute("id", "d" + termCount);
	definitionInput.setAttribute("name", "d" + termCount);
	newCardBody.appendChild(definitionInput);

	document.getElementById("cardContainer").appendChild(newCard);
}

// callback function for submit button
submit.addEventListener("click", function (event) {
	event.preventDefault();

	termArr = [];
	defArr = [];

	for (let i = 1; i <= termCount; i++) {
		termArr.push(document.getElementById("t" + i).value);
		defArr.push(document.getElementById("d" + i).value);
	}

	db.collection("flashcards")
		.add({
			title: document.getElementById("setName").value,
			terms: termArr,
			definitions: defArr,
		})
		.then(function (docRef) {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function (error) {
			console.error("Error adding document: ", error);
		});
	// window.location.href = "viewFlashcards.html";
});
