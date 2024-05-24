let gridView = document.querySelector('#employee_page .cards_section');
let listView = document.querySelector('#employee_page .table_section');
let btnView = document.querySelectorAll('.btn_view button');



// Aside Features 
for (let index = 0; index < btnView.length; index++) {
	let element = btnView[index];
	element.onclick = () => {
		let curIndex = index;
		for (let i = 0; i < btnView.length; i++) {
			btnView[i].setAttribute("data-id", i);
			let selectedId = btnView[i].getAttribute("data-id");
			let active = btnView[i].getAttribute("class");
			if (active !== "active" && curIndex == selectedId) {
				btnView[i].setAttribute("status", "active");
				btnView[i].classList.remove("btn-alt");
				gridView.style.display = "flex";
				listView.style.display = "none";
			}
			else
			{
				listView.style.display = "block";
				gridView.style.display = "none";
				btnView[i].classList.add("btn-alt");
				btnView[i].setAttribute("status", "inactive");
			}
		}	
	}
}



// Employee Search Feature 
let termSearch = document.getElementById('term-search');

termSearch.onkeyup = () => {
	//filter value
	let filterValue = termSearch.value;
	let item = document.querySelectorAll('#terms .data');
	
	for(let i = 0; i < item.length; i++){
		let data = item[i].querySelectorAll('.data td')[1];
		let empId = item[i].querySelectorAll('.data td')[2];
		let role = item[i].querySelectorAll('.data td')[3];
		let status = item[i].querySelectorAll('.data td')[4];
		let teams = item[i].querySelectorAll('.data td')[5];

		
		if(data.innerHTML.indexOf(filterValue) > -1 || empId.innerHTML.indexOf(filterValue) > -1 || role.innerHTML.indexOf(filterValue) > -1 || status.innerHTML.indexOf(filterValue) > -1 || teams.innerHTML.indexOf(filterValue) > -1){
			item[i].style.display = '';
		} else {
			item[i].style.display = 'none';
		}
	}
}


termSearch.onkeyup = () => {
	//filter value
	let filterValue = termSearch.value;
	let item = document.querySelectorAll('#role-data .data');
	for(let i = 0; i < item.length; i++){
		let position = item[i].querySelectorAll('.data > div')[0];
		let status = item[i].querySelectorAll('.data > div')[1];
		let team = item[i].querySelectorAll('.data > div')[2];
		let data = item[i].querySelectorAll('.data > div')[3];
		if(team.innerHTML.indexOf(filterValue) > -1 || data.innerHTML.indexOf(filterValue) > -1 || position.innerHTML.indexOf(filterValue) > -1 || status.innerHTML.indexOf(filterValue) > -1){
			item[i].style.display = '';
		} else {
			item[i].style.display = 'none';
		}
	}
}




//  addEventListener('keyup', filterNames);




