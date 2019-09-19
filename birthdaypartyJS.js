// BDay Party Generator

//array list of guest names
var guestNames = ["John","Rose","Dave","Jade","Jane","Roxy","Dirk","Jake","Mom","Dad"];

//empty array list to hold guest names after they are used
var usedNames = [];

//class to create Partygoer with name, address, and # of presents
class Partygoer {
	constructor(address) {
		this.name = guestNames.shift();
		usedNames.push(this.name);
		this.address = address;
		this.presents = Math.floor(Math.random() * 5 + 1);
	};
};

//class to create Present(s) with a type and cost
class Present {
	constructor() {
		var wrapped = Math.floor(Math.random() * 2);
		if(wrapped > 0){
			this.type = "wrapped";
		} else if(wrapped <= 0) {
			this.type = "bagged";
		};
		this.cost = "$" + Math.floor(Math.random() * (101 - 1) + 1);
	};
};

//empty array list to hold guest information
var guests = [];

//for loop to add attendees to guest list
for(let i = 0; i < 10; i++){
	let person = new Partygoer("Home");
	guests.push(person);
};

//empty array list to hold gift information
var gifts = [];

//for loop to add goodies to gift list depending on number of attendees
for(let i = 0; i < guests.length; i++){
	let goodie = new Present();
	gifts.push(goodie);
};

//print off the list of guests and gifts
console.log(guests);
console.log(gifts);

//print off the list of used names to make sure they're all being used
console.log(usedNames);