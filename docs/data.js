let colors = {
	template: {
		light: {
			r: 255,
			g: 255,
			b: 0,
		},
		mid: {
			r: 255,
			g: 0,
			b: 0,
		},
		dark: {
			r: 0,
			g: 0,
			b: 255,
		},
	},
	black: {
		light: {
			r: 58,
			g: 58,
			b: 58,
		},
		mid: {
			r: 35,
			g: 35,
			b: 35,
		},
		dark: {
			r: 0,
			g: 0,
			b: 0,
		},
	},
	gold: {
		light: {
			r: 247,
			g: 234,
			b: 202,
		},
		mid: {
			r: 252,
			g: 210,
			b: 131,
		},
		dark: {
			r: 173,
			g: 128,
			b: 45,
		},
	},
	silver: {
		light: {
			r: 205,
			g: 205,
			b: 205,
		},
		mid: {
			r: 178,
			g: 178,
			b: 178,
		},
		dark: {
			r: 100,
			g: 100,
			b: 100,
		},
	},
	red: {
		light: {
			r: 255,
			g: 119,
			b: 109,
		},
		mid: {
			r: 229,
			g: 84,
			b: 84,
		},
		dark: {
			r: 114,
			g: 28,
			b: 28,
		},
	},
	yellow: {
		light: {
			r: 234,
			g: 198,
			b: 131,
		},
		mid: {
			r: 236,
			g: 173,
			b: 53,
		},
		dark: {
			r: 119,
			g: 87,
			b: 27,
		},
	},
	blue: {
		light: {
			r: 127,
			g: 153,
			b: 255,
		},
		mid: {
			r: 67,
			g: 102,
			b: 242,
		},
		dark: {
			r: 39,
			g: 60,
			b: 142,
		},
	},
	rose: {
		light: {
			r: 247,
			g: 210,
			b: 223,
		},
		mid: {
			r: 252,
			g: 178,
			b: 202,
		},
		dark: {
			r: 137,
			g: 80,
			b: 100,
		},
	},
	aqua: {
		light: {
			r: 153,
			g: 219,
			b: 239,
		},
		mid: {
			r: 61,
			g: 198,
			b: 243,
		},
		dark: {
			r: 0,
			g: 85,
			b: 102,
		},
	},
	pink: {
		light: {
			r: 249,
			g: 167,
			b: 222,
		},
		mid: {
			r: 252,
			g: 108,
			b: 202,
		},
		dark: {
			r: 145,
			g: 62,
			b: 116,
		},
	},
	purple: {
		light: {
			r: 221,
			g: 155,
			b: 255,
		},
		mid: {
			r: 201,
			g: 86,
			b: 255,
		},
		dark: {
			r: 100,
			g: 43,
			b: 127,
		},
	},
	green: {
		light: {
			r: 91,
			g: 229,
			b: 162,
		},
		mid: {
			r: 57,
			g: 191,
			b: 128,
		},
		dark: {
			r: 17,
			g: 76,
			b: 57,
		},
	},
	orange: {
		light: {
			r: 255,
			g: 176,
			b: 124,
		},
		mid: {
			r: 255,
			g: 129,
			b: 50,
		},
		dark: {
			r: 130,
			g: 70,
			b: 33,
		},
	},
};

let bigNumbers = [
	document.getElementById("0b"),
	document.getElementById("1b"),
	document.getElementById("2b"),
	document.getElementById("3b"),
	document.getElementById("4b"),
	document.getElementById("5b"),
	document.getElementById("6b"),
	document.getElementById("7b"),
	document.getElementById("8b"),
	document.getElementById("9b"),
];
let smallNumbers = [
	document.getElementById("0s"),
	document.getElementById("1s"),
	document.getElementById("2s"),
	document.getElementById("3s"),
	document.getElementById("4s"),
	document.getElementById("5s"),
	document.getElementById("6s"),
	document.getElementById("7s"),
	document.getElementById("8s"),
	document.getElementById("9s"),
];

let wideTags = {
	default: {
		canvas: {
			width: 100,
			height: 65,
		},
		text: {
			x: 28,
			y: 16,
		},
		speciesText: {
			x: 22,
			y: 16,
		},
		idNum: {
			size: bigNumbers,
		},
	},
	bone: {
		idNum: {
			x: [23, 32, 41, 51, 60, 69],
			y: 36,
		},
		year: {
			x: [10, 15, 78, 84],
			y: [4, 4, 4, 4],
		},
	},
	fish: {
		idNum: {
			x: [23, 32, 41, 51, 60, 69],
			y: 36,
		},
		year: {
			x: [5, 10, 5, 10],
			y: [10, 10, 48, 48],
		},
	},
	bowtie: {
		idNum: {
			x: [23, 32, 41, 51, 60, 69],
			y: 36,
		},
		year: {
			x: [4, 9, 85, 90],
			y: [6, 6, 6, 6],
		},
	},
};

let standardTags = {
	default: {
		canvas: {
			width: 65,
			height: 65,
		},
		idNum: {
			size: smallNumbers,
		},
	},
	bell: {
		text: {
			x: 9,
			y: 26,
		},
		idNum: {
			x: [16, 21, 26, 33, 38, 43],
			y: 51,
		},
		year: {
			x: [15, 20, 38, 43],
			y: [16, 16, 16, 16],
		},
	},
	heart: {
		text: {
			x: 9,
			y: 19,
		},
		idNum: {
			x: [16, 21, 26, 33, 38, 43],
			y: 43,
		},
		year: {
			x: [9, 14, 45, 50],
			y: [7, 7, 7, 7],
		},
	},
	flower: {
		text: {
			x: 9,
			y: 22,
		},
		idNum: {
			x: [16, 21, 26, 33, 38, 43],
			y: 47,
		},
		year: {
			x: [12, 17, 42, 47],
			y: [11, 11, 11, 11],
		},
	},
	hydrant: {
		text: {
			x: 9,
			y: 25,
		},
		idNum: {
			x: [16, 21, 26, 33, 38, 43],
			y: 50,
		},
		year: {
			x: [14, 19, 39, 44],
			y: [14, 14, 14, 14],
		},
	},
	kitty: {
		text: {
			x: 9,
			y: 20,
		},
		idNum: {
			x: [16, 21, 26, 33, 38, 43],
			y: 45,
		},
		year: {
			x: [6, 11, 48, 53],
			y: [11, 11, 11, 11],
		},
	},
	house: {
		text: {
			x: 9,
			y: 20,
		},
		idNum: {
			x: [16, 21, 26, 33, 38, 43],
			y: 45,
		},
		year: {
			x: [6, 11, 48, 53],
			y: [11, 11, 11, 11],
		},
	},
};

let templates = {
	registration: {
		dog: {
			shape: "bone",
		},
		cat: {
			shape: "fish",
		},
		pet: {
			shape: "bowtie",
		},
	},
	vaccine: {
		fall2025: {
			shape: "heart",
			color: "red",
			year: "2025",
        },
        winter2025: {
			shape: "flower",
			color: "aqua",
			year: "2025",
		},
	},
};

let defaultTag = {
	id: "000000",
	shape: "heart",
	species: "pet",
	year: "2025",
	color: "black",
};
let tagData = defaultTag;

startup();

function startup() {
	loadParams();
	injectImages();
}

function loadParams() {
	let template = getParam("template");

	tagData = {
		id: getParam("id") ?? defaultTag.id,
		shape: getParam("shape") ?? defaultTag.shape,
		species: getParam("species") ?? defaultTag.species,
		year: getParam("year") ?? defaultTag.year,
		color: getParam("color") ?? defaultTag.color,
	};

	if (tagData.id.length < 6) tagData.id = tagData.id.padStart(6, "0");
	if (tagData.id.length > 6) tagData.id = tagData.id.slice(-6);

	if (templates[template]) {
		let type = getParam("type");
		if (template === "registration") type = tagData.species;

		tagData.template = template;
		tagData.type = type;

		for (let key in templates[template][type]) {
			tagData[key] = templates[template][type][key];
		}
	}
}

function injectImages() {
	document.getElementById("tag").src = "img/tags/" + tagData.shape + ".png";
	if (tagData.template) document.getElementById("text").src = "img/tags/text/" + tagData.template + ".png";
	if (tagData.species) document.getElementById("speciesText").src = "img/tags/speciesText/" + tagData.species + ".png";

	Promise.all(
		Array.from(document.images)
			.filter((img) => !img.complete)
			.map(
				(img) =>
					new Promise((resolve) => {
						img.onload = img.onerror = resolve;
					})
			)
	).then(() => {
		console.log("images finished loading");
		buildTag();
	});
}

function buildTag() {
	let tagLookup = standardTags;
	if (tagData.template === "registration") tagLookup = wideTags;

	setDefaults(tagLookup, tagData.shape);
	console.log(tagData);
	console.log(tagLookup);

	let tagImg = document.getElementById("tag");
	let textImg = document.getElementById("text");
	let speciesTextImg = document.getElementById("speciesText");

	const canvas = document.getElementById("canvas");
	canvas.width = tagLookup[tagData.shape].canvas.width;
	canvas.height = tagLookup[tagData.shape].canvas.height;
	const ctx = canvas.getContext("2d");

	ctx.drawImage(tagImg, 0, 0);
	ctx.drawImage(textImg, tagLookup[tagData.shape].text.x, tagLookup[tagData.shape].text.y);
	if (tagData.template === "registration") ctx.drawImage(speciesTextImg, tagLookup[tagData.shape].speciesText.x, tagLookup[tagData.shape].speciesText.y);

	for (let i = 0; i < 6; i++) {
		let digit = parseInt(tagData.id[i]);
		ctx.drawImage(tagLookup[tagData.shape].idNum.size[digit], tagLookup[tagData.shape].idNum.x[i], tagLookup[tagData.shape].idNum.y);
	}

	for (let j = 0; j < 4; j++) {
		let digit = parseInt(tagData.year[j]);
		ctx.drawImage(smallNumbers[digit], tagLookup[tagData.shape].year.x[j], tagLookup[tagData.shape].year.y[j]);
	}

	replaceColor(ctx, 100, 65, colors.template.mid, colors[tagData.color].mid);
	replaceColor(ctx, 100, 65, colors.template.dark, colors[tagData.color].dark);
	replaceColor(ctx, 100, 65, colors.template.light, colors[tagData.color].light);
}

function setDefaults(dataObj, key) {
	for (let k in dataObj["default"]) {
		if (!dataObj[key][k]) dataObj[key][k] = dataObj["default"][k];
		else {
			for (let y in dataObj["default"][k]) {
				if (!dataObj[key][k][y]) dataObj[key][k][y] = dataObj["default"][k][y];
			}
		}
	}
}

function getParam(name) {
	let params = new URL(document.location).searchParams;
	return params.get(name);
}

function replaceColor(ctx, width, height, oldColor, newColor) {
	const imageData = ctx.getImageData(0, 0, width, height);
	const data = imageData.data; // This is a Uint8ClampedArray
	console.log(data);
	for (let i = 0; i < data.length; i += 4) {
		if (data[i] === oldColor.r && data[i + 1] === oldColor.g && data[i + 2] === oldColor.b) {
			data[i] = newColor.r;
			data[i + 1] = newColor.g;
			data[i + 2] = newColor.b;
		}
	}
	console.log(ctx);
	ctx.putImageData(imageData, 0, 0);
}
