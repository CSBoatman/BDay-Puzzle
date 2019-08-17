//I want you to program a birthday party.
//Create a class of partygoer and make a random number of guests.
//Then create a class of present and assign a random number of presents to each guest.

var guestNames = ["John","Rose","Dave","Jade","Jane","Roxy","Dirk","Jake","Mom","Dad"];

//name, address, how many presents
class Partygoer {
	constructor(name, address) {
		for(let i = 0; i < guestNames.length; i++){
			this.name = guestNames[i];
		};
		this.address = address;
		this.presents = Math.floor(Math.random() * 5) + 1;
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
		this.cost = "$" + Math.floor(Math.random() * 21);
	}
}

function bdayparty(){
	var guests = [];
	for(let i = 0; i < 10; i++){
		let guest = new Partygoer("name","partyA");
		guests.push(guest);
	}
	return guests;
}

function bdaygifts(){
	var gifts = [];
	for(let i = 0; i < 10; i++){
		let gift = new Present("type","$");
		gifts.push(gift);
	}
	return gifts;
}

var partyA = bdayparty();
var giftsA = bdaygifts();
console.log(partyA);
console.log(giftsA);