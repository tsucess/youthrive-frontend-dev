const assignBtn = document.querySelector("#btn-assign");
const closeModalBtn = document.querySelector("#close");
const modal = document.querySelector("#modal");

const dropBtn = document.querySelector("#drop");
const dropDown = document.querySelector("#dropdown");
const arrow = document.querySelector("#arrow");



let curVal = 0;

// Sidebar Dropdown Feature 
dropBtn.onclick = () => {
	if (curVal === 0) {
		dropDown.style.display = "block";
		arrow.classList.add("fa-arrow-up");
		arrow.classList.remove("fa-arrow-down");
		curVal = 1;
	}
	else
	{
		arrow.classList.add("fa-arrow-down");
		arrow.classList.remove("fa-arrow-up");
		dropDown.style.display = "none";
		curVal = 0;
	}
}


// Modal Feature 
assignBtn.onclick = () => {
	modal.style.display = "flex";
}
closeModalBtn.onclick = () => {
	modal.style.display = "none";
}