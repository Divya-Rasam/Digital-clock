/*
function updateClock() {
    const now = new Date();

    // Time and AM/PM
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format

    document.getElementById('ampm').textContent = ampm;
    document.getElementById('time').textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

    // Days of the week
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayIndex = now.getDay();
    const dayList = days.map((day, index) => {
        return `<div class="${index === dayIndex ? 'today' : ''}">${day}</div>`;
    }).join('');
    document.getElementById('dayList').innerHTML = dayList;

    // Calendar (Day and Month)
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'short' });
    document.getElementById('calendar').textContent = `${day} ${month}`;

    // Placeholder Temperature (You would replace this with an API call)
    document.getElementById('temperature').textContent = '25°C';
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();
*/

function showTime() {
    var d = new Date();            // object // date stored in that instance
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    if (h > 12) {
        h = h - 12;
    }

    h = h < 10 ? "0" + h : h;               //termenary operator   // ? is true conditon
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + " : " + m + " : " + s;
    document.getElementById("main_clock").innerText = time;

    setTimeout(showTime, 1000);        // refresh every sec
}

function showAmPm() {
    var session = "AM";

    var d = new Date();
    var h = d.getHours();

    if (h>=12) {
        session = "PM"
    } 

    var ampm = session;
    document.getElementById("ampm").innerText = ampm;
}

showAmPm();

/*          //  Integrating showAmPm into showTime

function showTime() {
    var d = new Date();            // Create a new Date object
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    var session = "AM";
    if (h >= 12) {
        session = "PM";
    }

    if (h > 12) {
        h = h - 12;
    }

    h = h < 10 ? "0" + h : h;  // Add leading zeros if necessary
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + " : " + m + " : " + s;
    document.getElementById("main_clock").innerText = time;
    document.getElementById("ampm").innerText = session;

    setTimeout(showTime, 1000);  // Refresh every second
}

// Initial call to start the clock
showTime();

*/

function showDate() {
    var d = new Date();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = months[d.getMonth()];   // convert month index to name
    var date = d.getDate();
    
    //set values into respective elements
    document.getElementById("month").innerText = month;
    document.getElementById("day").innerText = date;
}

showDate();

function currentDay() {
    var d = new Date();
    var dayIndex = d.getDay(); // get index of the current day (0 = sunday, 6 = saturday
    
    var days = document.getElementById("days").children;

    // remove highlight from all days
    for (var i = 0; i < days.length; i++) {
        days[i].classList.remove("today");
    }

    // highlight the current day
    days[dayIndex].classList.add("today");
}

//call the function to highlight the current day
currentDay();


function updateTemperature() {
    var apiKey = "7d8b04bcb06d7bc95635628705556ad2";
    var lat = 19.0760;
    var lon = 72.8777;         // lat lon for Mumbai
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var temperature = data.main.temp;
            document.getElementById("temperature").innerText = temperature + "° C";
        })
        .catch(error => {
            console.error("Error fetching the weather data:", error);
            document.getElementById("temperature").innerText = "N/A";
        })
}

// Call the function to fetch the temperature initially and update it
updateTemperature();

