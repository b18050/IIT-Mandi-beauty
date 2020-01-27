// Whwn the user clicks on the button, toggle between hiding and showing the dropdown content
function ShowList() {
	console.debug("I am at 1");
	document.getElementById("myDropdown").classList.toggle('show');
	console.debug("I am at 2");
}
//Close the dropdown if user clicks outside the drop down
window.onclick = function(event) {
	if(!event.target.matches(".dropbtn")) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for(i = 0; i < dropdowns.length; i++) {
			var item = dropdowns[i];
			if(item.classList.contains('show')) {
				item.classList.remove('show');
			}
		}
	}
}

