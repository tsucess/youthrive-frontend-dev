const dropBtn = document.querySelector("#drop");
const dropDown = document.querySelector("#dropdown");
const arrow = document.querySelector("#arrow");

const navLinks = document.querySelectorAll("aside .nav_item .nav_links li span");

// Aside Features 
for (let index = 0; index < navLinks.length; index++) {
	let element = navLinks[index];
	element.onclick = () => {
		let curIndex = index;
		for (let i = 0; i < navLinks.length; i++) {
			navLinks[i].setAttribute("data-id", i);
			let selectedId = navLinks[i].getAttribute("data-id");
			let active = navLinks[i].getAttribute("class");
			console.log(curIndex);
			console.log(selectedId);

			if (active !== "active" && curIndex == selectedId) {
				navLinks[i].classList.add("active");
			}
			else
			{
				navLinks[i].classList.remove("active");
			}
		}	
	}
}

// Sidebar Dropdown Feature 
let curVal = 0;
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