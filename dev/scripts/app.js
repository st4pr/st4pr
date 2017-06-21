const ryanQuotes = ['pretty cool, pretty fun, pretty neat', 'you need two daddys', 'flushed with cache', 'tabs tabs tabs for days'];
const simonQuotes = ['pretty great', 'a hexagon of compliments, if you will', 'automagically', 'this.props.match.params.id, YO', `jokes on them they dont exist anymore...rewind THAT blockbuster`, 'we’re playing with fire-gami', 'going shopping with RyRy, my bff', 'pretty fly for a RyGuy', 'LET ME LIVE MY LIFE', `you're all surgeons, code surgeons. 'Scalpel! Cut! Paste!`, 'it was Rhianna', `we're a college now!` ];
const sylviaQuotes = ['CATBURGERS', '(after hours) body waxing', 'don’t be a hero', 'we gucci', 'Div Daddy', 'PI-KA-CHUUUUU!'];

const app = {};

app.randomIndex = function (array) {
	let randIndex = Math.floor(Math.random() * array.length);
	return randIndex
}

app.quoteHandler = function() {
	$('.headHolder').on('click', function(event) {
		let quotes = event.target.dataset.quotes
		console.log(quotes.length);
		// randIndex = Math.floor(Math.random() * quotes.length)
	});

	$('#ryan').on('click', function() {
		$('.quoteBox').empty();
		$(".quoteBox").css("visibility", "visible");
		let index = app.randomIndex(ryanQuotes);
		let quote = ryanQuotes[index];
		let quoteElement = $('<p>').text(quote);
		$('.quoteBox').append(quoteElement);
	});

	$('#simon').on('click', function() {
		$('.quoteBox').empty();
		$(".quoteBox").css("visibility", "visible");
		let index = app.randomIndex(simonQuotes);
		let quote = simonQuotes[index];
		let quoteElement = $('<p>').text(quote);
		$('.quoteBox').append(quoteElement);
	});

	$('#sylvia').on('click', function() {
		$('.quoteBox').empty();
		$(".quoteBox").css("visibility", "visible");
		let index = app.randomIndex(sylviaQuotes);
		let quote = sylviaQuotes[index];
		let quoteElement = $('<p>').text(quote);
		$('.quoteBox').append(quoteElement);
	});
}

app.init = function() {
	app.quoteHandler()
}

$(document).ready(function () {
	app.init()
});