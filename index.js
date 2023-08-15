function displayListing(listing) {
	console.log("displayListing");
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
	const contactDiv = document.createElement("button");

	// add class to contact div
	contactDiv.classList.add("contact", "btn", "btn-light");

	// make callback function for contact button
	contactDiv.addEventListener("click", function () {
		window.location.href = "mailto:" + listing.contact;
	});

	// create contact element
	const contact = document.createElement("p");
	//
	contact.style.display.fontsize = "0.25rem";
	// set innerHTML of contact element
	contact.innerHTML = "Contact";
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
	"vinne329@gmail.com",
	"assets/imgs/iconcolored.png"
);

// display test textbook listing
displayListing(testListing);

// test multiple textbook listings
// for (let i = 0; i < 1000; i++) {
// 	displayListing(testListing);
// }

// create textbook listing array
const textbookListings = [];
// get database listings
const listingsCollection = db.collection("listings");
console.log(listingsCollection);
const querySnapshot = listingsCollection
	.get()
	.then(function (querySnapshot) {
		for (let i = 0; i < querySnapshot.docs.length; i++) {
			const doc = querySnapshot.docs[i];
			const listing = new textbookListing(
				doc.data().title,
				doc.data().edition,
				doc.data().price,
				doc.data().seller,
				doc.data().email,
				doc.data().img
			);
			textbookListings.push(listing);
			console.log(listing);
		}
		for (let i = 0; i < textbookListings.length; i++) {
			displayListing(textbookListings[i]);
		}
	})
	.catch(function (error) {
		console.error("Error getting documents: ", error);
	});
// display textbook listings
