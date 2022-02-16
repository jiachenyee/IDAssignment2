const params = new URLSearchParams(window.location.search);
const dateString = params.get('date');

if (dateString == null) {
    window.open(`index`,"_self")
}

var userInfo = JSON.parse(localStorage.getItem("userInfo"));

var deliveryDateTime = document.getElementById("deliveryDateTime");

var dateSegments = dateString.split("-");

var date = new Date(dateSegments[2],dateSegments[1] - 1,dateSegments[0]);

deliveryDateTime.innerText = "1pm and 4pm on " + date.toDateString();

var backgroundConfetti = document.getElementById("backgroundConfetti");

backgroundConfetti.style.visibility = "hidden";

var encouragmenetText = "Earn points, win prizes!";

if (userInfo["points"] >= 1000) {
    backgroundConfetti.style.visibility = "visible";
} else if (userInfo["points"] > 900) {
    encouragmenetText = "Almost there!";
} else if (userInfo["points"] > 500) {
    encouragmenetText = "Halfway there!";
} else if (userInfo["points"] > 200) {
    encouragmenetText = "Buy more and win more!";
}

var pointsProgress = document.getElementById("pointsProgress");

pointsProgress.innerHTML = `
<h2>${encouragmenetText}</h2>
<p style="color:#ffffff;">Get a spin and win some free products every 1000 points!</p>
<p style="text-align: right; color:#ffffff;">${userInfo["points"]}/1000</p>
<div class="progressBar">
    <div class="progressBarItem" style="width:${userInfo["points"] / 10}%"></div>
</div>
`;