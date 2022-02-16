const params = new URLSearchParams(window.location.search);
const dateString = params.get('date');

var deliveryDateTime = document.getElementById("deliveryDateTime");

var dateSegments = dateString.split("-");

var date = new Date(dateSegments[2],dateSegments[1] - 1,dateSegments[0]);

deliveryDateTime.innerText = "1pm and 4pm on " + date.toDateString();