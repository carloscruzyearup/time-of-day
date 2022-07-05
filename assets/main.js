let main = document.getElementById( "main" );
let day = document.getElementById("day-of-week");
let timeMsg = document.getElementById("time");

console.log(timeMsg);

let	morning = new Date();
let	afternoon = new Date();
let	evening = new Date();
let	night = new Date();

night.setHours( 5 );
morning.setHours( 12 );
afternoon.setHours( 18 );
evening.setHours( 23 );

let time = new Date();

document.getElementById("copyright").innerText = time.getFullYear();

let dayofweek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

let month = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

document.getElementById("hour").innerText = `${time.getHours()%12}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()} ${(time.getHours() > 12 ? 'PM' : 'AM')}`
document.getElementById("month").innerText = month[time.getMonth()] + " ";

let suffix;
if( time.getDay() % 10 == 1 ) {
	suffix = "st";
}
else if( time.getDay() % 10 == 2 ) {
	suffix = "nd";
}
else if( time.getDay() % 10 == 3 ) {
	suffix = "rd";
}
else {
	suffix = "th";
}

document.getElementById("day").innerText = `${time.getDay()}${suffix}`;
document.getElementById("year").innerText = time.getFullYear();
day.innerText = dayofweek[time.getDay()];

switch( true ) {
	case ( time.getHours() >= evening.getHours() ):
	case ( time.getHours() < night.getHours() ):
		main.style = "background-image: url('/images/night.jpg')"
		timeMsg.innerText = "Good night!";
		timeMsg.style = "color: #00134B"
		break;
	case ( time.getHours() < morning.getHours() ):
		main.style = "background-image: url('/images/morning.jpg')"
		timeMsg.innerText = "Good morning!";
		timeMsg.style = "color: #DE8964"
		break;
	case ( time.getHours() < afternoon.getHours() ):
		main.style = "background-image: url('/images/afternoon.jpg')"
		timeMsg.innerText = "Good afternoon!";
		timeMsg.style = "color: #838300"
		break;
	case ( time.getHours() < evening.getHours() ):
		main.style = "background-image: url('/images/evening.jpg')"
		timeMsg.innerText = "Good evening!";
		timeMsg.style = "color: #B16198"
		break;
	default:
		break;
}
