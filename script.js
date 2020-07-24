// This is a javascript file

var number = 54;

var randomIndex;

for (i = 0; i < 54; i++) {
    randomIndex = Math.floor(Math.random() * 54);
    console.log(randomIndex);
}




var userInput = "hunting";

var getParkInfo = function(userInput) {
    var apiUrl = "https://developer.nps.gov/api/v1/activities/parks?q=" + userInput + "&api_key=SL6NUAYKuQc9Oci5uYIesi64ujlohyYU5Oshn7zb";

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                getParkCoordinates(data.data[0].parks[0].parkCode)
            });
        } else {
            alert("Error: " + response.statusText);
        }
    });
};

// pass the park code into the function to fetch the park api
var getParkCoordinates = function(parkCode) {
    var apiUrl = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&api_key=SL6NUAYKuQc9Oci5uYIesi64ujlohyYU5Oshn7zb";

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data); 
                console.log("lat = " + data.data[0].latitude);
                console.log("long = " + data.data[0].longitude);
            });
        } else {
            alert("Error: " + response.statusText);
        }
    });
};

// getParkInfo();