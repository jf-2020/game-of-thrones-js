// get number of characters
const num_chars = characters.length;
console.log(`There are ${num_chars} characters in the array.`);

// get number of characters whose name begin with A
let num_chars_A = 0;
characters.forEach((char) => {
	if (char.name[0] == "A") {
		num_chars_A += 1;
	}
});
console.log(`The are ${num_chars_A} characters whose name begin with A.`);

// get number of characters whose name begin with Z
let num_chars_Z = 0;
characters.forEach((char) => {
	if (char.name[0] == "Z") {
		num_chars_Z += 1;
	}
});
console.log(`There are ${num_chars_Z} characters whose name begin with Z.`);

// get number of characters that're dead
let num_chars_dead = 0;
characters.forEach((char) => {
	if (char.dead) {
		num_chars_dead += 1;
	}
});
console.log(`There are ${num_chars_dead} dead characters.`);

// get the character with the most titles
let max = 0;
let current_max_char = "";
for (let i=0; i<characters.length; i++) {
	if (characters[i].titles) {
		if (characters[i].titles.length > max) {
			max += 1;
			current_max_char = characters[i].name;
		}
	}
};
console.log(`The character with the most titles is ${current_max_char}.`);

// count the number of valyrians
let num_valyrian = 0;
characters.forEach((char) => {
	if (char.culture == "Valyrian") {
		num_valyrian += 1;
	}
});
console.log(`The number of Valyrians is ${num_valyrian}.`);

// the actor that plays "Hot Pie"
let hot_pie_actor = "";
characters.forEach((char) => {
	if (char.name == "Hot Pie") {
		hot_pie_actor = char.playedBy[0];
	}
});
console.log(`The actor potraying "Hot Pie" is ${hot_pie_actor}.`);

// count the number of characters that aren't in the tv series
let num_in_tv = 0;
characters.forEach((char) => {
	for (let i=0; i<char.tvSeries.length; i++) {
		if (char.tvSeries[i] != "") {
			num_in_tv += 1;
			break;
		}
	};
});
console.log(`The number of characters actually in the tv series is ${num_in_tv}.`);

// get a list of characters that have the last name "Targaryen"
let targaryen_chars = [];
characters.forEach((char) => {
	if (char.name.includes('Targaryen')) {
		if (!targaryen_chars.includes(char.name)) {
			targaryen_chars.push(char.name);	
		}
	}
});
console.log(`The following characters all have the last name, "Targaryen":`);
for (let i=0; i<targaryen_chars.length; i++) {
	console.log(`${targaryen_chars[i]}`);
};

// create a histogram of house allegiances
let houses = [];
let house_counts = {};
characters.forEach((char) => {
	char.allegiances.forEach((house) => {
		if (!houses.includes(house)) {
			houses.push(house);
			house_counts[house] = 1;
		} else {
			house_counts[house] += 1; 
		}
	});
});
houses.forEach((house) => {
	// get house
	let house_split = house.split('/');
	let house_num = house_split[house_split.length-1];
	// setup format string
	let house_string = `${house_num}:`;
	let house_count_string = "|";
	for (let i=0; i<house_counts[house]; i++) {
		house_count_string += "x";
	};
	console.log(house_string + house_count_string);
});