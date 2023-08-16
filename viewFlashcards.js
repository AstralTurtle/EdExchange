// <div id="allflashcards" class="container-fluid">
// 	<div id="flashcardsdiv">
// 		<div id="flashcolor" class="card w-25 bg-success" style="height: 200px">
// 			<div class="card-body">
// 				<h2 class="card-title">Unit 1</h2>
// 				<p class="card-text">Chemistry (3 terms)</p>
// 				<a href="studyCards.html" class="btn btn-primary">
// 					Study
// 				</a>
// 			</div>
// 		</div>
// 	</div>
// </div>;

function displaySet(set) {
	card = document.createElement("div");
	card.classList.add(
		"card",
		"col-2",
		"bg-success",
		"flashcolor",
		"newcardcreated"
	);
	card.style.height = "200px";
	cardBody = document.createElement("div");
	cardBody.classList.add("card-body");
	cardTitle = document.createElement("h2");
	cardTitle.classList.add("card-title");
	cardTitle.innerHTML = set.title;
	cardText = document.createElement("p");
	cardText.classList.add("card-text");
	cardText.innerHTML = "(" + set.numCards + " terms)";
	cardLink = document.createElement("a");
	cardLink.classList.add("btn", "btn-primary");
	cardLink.href = "studyCards.html";
	cardLink.onclick = function () {
		localStorage.setItem("set", JSON.stringify(set));
	};
	cardLink.innerHTML = "Study";
	cardBody.appendChild(cardTitle);
	cardBody.appendChild(cardText);
	cardBody.appendChild(cardLink);
	card.appendChild(cardBody);

	document.getElementById("flashcardsdiv").appendChild(card);
}

const sets = [];

testSet = new set(
	"Unit 1",
	["Chemistry", "Physics", "Biology"],
	["The study of matter", "The study of motion", "The study of life"]
);

const setCollection = db.collection("flashcards");

const querySnapshot = setCollection
	.get()
	.then(function (querySnapshot) {
		for (let i = 0; i < querySnapshot.docs.length; i++) {
			const doc = querySnapshot.docs[i];
			let tempSet = new set(
				doc.data().title,
				doc.data().terms,
				doc.data().definitions
			);
			sets.push(tempSet);
		}

		for (let i = 0; i < sets.length; i++) {
			displaySet(sets[i]);
		}
	})
	.catch(function (error) {
		console.error("Error getting documents: ", error);
	});

// Search Button
// get search button
let searchButton = document.getElementById("searchButton");
// add event listener to search button
searchButton.addEventListener("click", function (event) {
	event.preventDefault();
	// get search input
	let search = document.getElementById("searchbar");
	let searchInput = search.value;
	document.querySelector("#flashcardsdiv").innerHTML = "";
	sets.forEach((set) => {
		console.log(set.title);

		if (set.title.includes(searchInput)) {
			displaySet(set);
		}
	});
});

// read data from database
