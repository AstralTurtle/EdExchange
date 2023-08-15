// get inputs
imgInput = document.getElementById("imgInput");
titleInput = document.getElementById("titleInput");
editionInput = document.getElementById("edInput");
priceInput = document.getElementById("costInput");
nameInput = document.getElementById("sellerInput");
emailInput = document.getElementById("emailInput");

// get button
sellBtn = document.getElementById("createListing");

let imgapikey = "8TZEGsbl5UsXivmDzhIf8UFp97NKqBxakYPGMb4k";

// constructor(title, edition, price, seller, contact, img) {
// 		this.title = title;
// 		this.edition = edition;
// 		this.price = price;
// 		this.seller = seller;
// 		this.contact = contact;
// 		this.img = img;
// 	}

// function to handle image upload
function uploadImage() {
	let file = imgInput.files[0];
	let formData = new FormData();
	formData.append("images[]", file);

	let xhr = new XMLHttpRequest();
	xhr.open("POST", "https://api.imgchest.com/v1/post");
	xhr.setRequestHeader("Authorization", `Bearer ${imgapikey}`);
	xhr.onload = function () {
		if (xhr.status === 200) {
			let response = JSON.parse(xhr.responseText);
			console.log(response);
		} else {
			console.log("error, status code = " + xhr.status);
		}
	};
	xhr.send(formData);
	return new Promise((resolve, reject) => {
		xhr.onreadystatechange = function () {
			console.log(xhr.readyState);
			console.log(xhr.responseText);

			if (xhr.readyState === 4) {
				resolve(JSON.parse(xhr.responseText).data.images[0].link);
			}
		};
	});
}

sellBtn.addEventListener("click", function () {
	console.log(imgInput.files[0].name);
	uploadImage().then(function (url) {
		console.log(url);
		db.collection("listings")
			.add({
				title: titleInput.value,
				edition: editionInput.value,
				price: priceInput.value,
				seller: nameInput.value,
				email: emailInput.value,
				img: url,
				id: UUIDGenerator(),
				sold: false,
			})
			.then(function (docRef) {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch(function (error) {
				console.error("Error adding document: ", error);
			});
	});
});

// Function from w3resource.com
const UUIDGenerator = () =>
	([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)
	);
