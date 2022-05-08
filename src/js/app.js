import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".hot").forEach(x=>{
		x.innerHTML = x.innerHTML + ' &#128293'
	})
});
