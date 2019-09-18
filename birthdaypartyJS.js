//I want you to program a birthday party.
//Create a class of partygoer and make a random number of guests.
//Then create a class of present and assign a random number of presents to each guest.

var guestNames = ["John","Rose","Dave","Jade","Jane","Roxy","Dirk","Jake","Mom","Dad"];

var usedNames = [];

//name, address, how many presents
class Partygoer {
	constructor(name, address) {
		// idk why this is only assigning four names
		for(let i = 0; i < guestNames.length; i++){
			this.name = guestNames.shift();
			usedNames.push(this.name);
		};
		this.address = address;
		this.presents = Math.floor(Math.random() * 5 + 1);
	}
}

//type, cost, wrapped or bagged
class Present {
	constructor(type, cost) {
		var wrapped = Math.floor(Math.random() * 2);
		if(wrapped > 0){
			this.type = "wrapped";
		} else if(wrapped <= 0) {
			this.type = "bagged";
		}
		this.cost = "$" + Math.floor(Math.random() * (101 - 1) + 1);
	}
}

function bdayparty(){
	var guests = [];
	for(let i = 0; i < 10; i++){
		let person = new Partygoer("name","partyA");
		guests.push(person);
	}
	return guests;
}

function bdaygifts(){
	var gifts = [];
	for(let i = 0; i < 10; i++){
		let goodie = new Present("type","cost");
		gifts.push(goodie);
	}
	return gifts;
}

var partyA = bdayparty();
var giftsA = bdaygifts();
console.log(partyA);
console.log(giftsA);

// lets us see that it is running through all names in the original array
console.log(usedNames);