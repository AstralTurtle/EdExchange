const firebaseConfig = {
	apiKey: "AIzaSyBj56360i7OuhXgK7-PraYGZ9ppAnHJ82Q",

	authDomain: "ascedexchange.firebaseapp.com",

	projectId: "ascedexchange",

	storageBucket: "ascedexchange.appspot.com",

	messagingSenderId: "74402474063",

	appId: "1:74402474063:web:1e579387666d52671da23a",
};

var uiConfig = {
	signInSuccessUrl: "<url-to-redirect-to-on-success>",
	signInOptions: [
		// Add the sign-in options you want to offer your users
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
	],
	// Add the terms of service and privacy policy URLs
	tosUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
	privacyPolicyUrl: function () {
		window.location.assign("https://www.youtube.com/watch?v=xvFZjo5PgG0");
	},
};

class textbookListing {
	constructor(title, edition, price, seller, contact, img) {
		this.title = title;
		this.edition = edition;
		this.price = price;
		this.seller = seller;
		this.contact = contact;
		this.img = img;
	}
}

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
