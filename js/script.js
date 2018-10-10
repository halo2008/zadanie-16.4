var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');

button.addEventListener('click', function() {
  getJoke();
});

getJoke();

function getJoke () {
  var paragraph = document.getElementById('joke');
    xhr = new XMLHttpRequest();        
  	xhr.addEventListener('load', function () {
		var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;	
	});

	xhr.onerror = function() { 
		alert("Not Connected"); 
	}

 xhr.open("GET", url, true); 
 xhr.send();
}