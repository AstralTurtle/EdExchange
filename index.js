const firebaseConfig = {
	apiKey: "AIzaSyBj56360i7OuhXgK7-PraYGZ9ppAnHJ82Q",

	authDomain: "ascedexchange.firebaseapp.com",

	projectId: "ascedexchange",

	storageBucket: "ascedexchange.appspot.com",

	messagingSenderId: "74402474063",

	appId: "1:74402474063:web:1e579387666d52671da23a",
};

class textbookListing {
	constructor(title, edition, price, seller, contact, img) {
		this.title = title;
		this.edition = edition;
		this.price = price;
		this.seller = seller;
		this.contact = contact;
		this.img = "";
	}
}

function displayListing(listing) {
	const listingContainer = document.createElement("div");
	// add class to div
	listingContainer.classList.add("textdiv");

	// create img div
	const imgDiv = document.createElement("div");
	// add class to img div
	imgDiv.classList.add("textbookimgdiv");
	// create img element
	const img = document.createElement("img");
	// add class to img element
	img.classList.add("textbookimg");
	// set src attribute of img element
	img.src = listing.img;
	// append img element to img div
	imgDiv.appendChild(img);
	// append img div to listing container
	listingContainer.appendChild(imgDiv);

	// create title div
	const titleDiv = document.createElement("div");
	// add class to title div
	titleDiv.classList.add("nameofbook");
	// create title element
	const title = document.createElement("p");
	// set innerHTML of title element
	title.innerHTML = listing.title;
	// append title element to title div
	titleDiv.appendChild(title);
	// append title div to listing container
	listingContainer.appendChild(titleDiv);

	// create edition div
	const editionDiv = document.createElement("div");
	// add class to edition div
	editionDiv.classList.add("edition");
	// create edition element
	const edition = document.createElement("p");
	// set innerHTML of edition element
	edition.innerHTML = listing.edition;
	// append edition element to edition div
	editionDiv.appendChild(edition);
	// append edition div to listing container
	listingContainer.appendChild(editionDiv);

	// create price div
	const priceDiv = document.createElement("div");
	// add class to price div
	priceDiv.classList.add("price");
	// create price element
	const price = document.createElement("p");
	// set innerHTML of price element
	price.innerHTML = listing.price;
	// append price element to price div
	priceDiv.appendChild(price);
	// append price div to listing container
	listingContainer.appendChild(priceDiv);

	// create seller info div
	const sellerinfoDiv = document.createElement("div");
	// add class to seller info div
	sellerinfoDiv.classList.add("sellcontact");
	// create seller div
	const sellerDiv = document.createElement("div");
	// add class to seller div
	sellerDiv.classList.add("seller");
	// create seller element
	const seller = document.createElement("p");
	// set innerHTML of seller element
	seller.innerHTML = listing.seller;
	// append seller element to seller div
	sellerDiv.appendChild(seller);
	// append seller div to seller info div
	sellerinfoDiv.appendChild(sellerDiv);
	// create contact div
	const contactDiv = document.createElement("div");
	// add class to contact div
	contactDiv.classList.add("contact");
	// create contact element
	const contact = document.createElement("p");
	// set innerHTML of contact element
	contact.innerHTML = listing.contact;
	// append contact element to contact div
	contactDiv.appendChild(contact);
	// append contact div to seller info div
	sellerinfoDiv.appendChild(contactDiv);
	// append seller info div to listing container
	listingContainer.appendChild(sellerinfoDiv);

	// append listing container to listings div
	document.getElementById("alltextbooks").appendChild(listingContainer);
}

// create test textbook listing
const testListing = new textbookListing(
	"Test Textbook",
	"1st Edition",
	"$100",
	"Test Seller",
	"vinne329",
	"assets/imgs/logo-black.png"
);

// display test textbook listing
displayListing(testListing);

// test multiple textbook listings
for (let i = 0; i < 1000; i++) {
	displayListing(testListing);
}
