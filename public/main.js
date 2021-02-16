var gif = false;
var url = "";

/* Called when user wishes to be shown some meow */
function showMeMeow() {
	// Change the text of button
	document.getElementById("meowBut").innerHTML = "MORE MEOW!";
	
	if (gif == true) {
		url = "https://api.thecatapi.com/v1/images/search?mime_types=gif";
	} else {
		url = "https://api.thecatapi.com/v1/images/search"
	}
	
	// Fetch request to API
	fetch(url, {
		method: "GET"
	})
    .then(response => response.json())
    .then(data => {
		const imageUrl = data[0].url
		document.getElementById("meow").src =imageUrl;
		document.getElementById("JSON").innerHTML = JSON.stringify(data);
    })
    .catch(function(error) {
	  // console log any errors
      console.log(error);
    });
}

/* Only show gifs */
function gifToggle() {
	gif = (gif==false) ? true : false;
	var color = (gif==false) ? "indianred" : "forestgreen";
	document.getElementById("gifToggle").style.backgroundColor = color;
}
