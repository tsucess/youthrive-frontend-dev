const assignBtn = document.querySelector("#btn-assign");
const closeModalBtn = document.querySelector("#close");
const modal = document.querySelector("#modal");

	// Modal Feature 
	assignBtn.onclick = () => {
		modal.style.display = "flex";
		 }
		closeModalBtn.onclick = () => {
		modal.style.display = "none";
	}

	
// Role Search Feature 
let dataSearch = document.getElementById('data-search');

dataSearch.onkeyup = () => {
	//filter value
	let filterValue = dataSearch.value;
	let item = document.querySelectorAll('#role-data .data');
	for(let i = 0; i < item.length; i++){
		let position = item[i].querySelectorAll('.data > div')[0];
		let status = item[i].querySelectorAll('.data > div')[1];
		let data = item[i].querySelectorAll('.data > div')[2];
		if(data.innerHTML.indexOf(filterValue) > -1 || position.innerHTML.indexOf(filterValue) > -1 || status.innerHTML.indexOf(filterValue) > -1){
			item[i].style.display = '';
		} else {
			item[i].style.display = 'none';
		}
	}
}