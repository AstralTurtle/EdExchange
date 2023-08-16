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
		this.img = img;
	}
}

class set {
	constructor(title, termArr, defArr) {
		this.title = title;
		this.numCards = termArr.length;
		this.termArr = termArr;
		this.defArr = defArr;
	}
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
