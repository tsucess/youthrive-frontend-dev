// let userAccount = [];
let userAccount = [
	{
		"acct_id": 1,
		"acct_name": "OGUNSANYA TAOFEEQ",
		"acct_no": "0023234545",
		"bank": 2,
		"acct_pin": 1234,
		"acct_bal": 200000
	},
	{
		"acct_id": 2,
		"acct_name": "MARY MICHAEL",
		"acct_no": "0022224444",
		"bank": 4,
		"acct_pin": 1234,
		"acct_bal": 100000
	},
	{
		"acct_id": 3,
		"acct_name": "SAMUEL KABIR",
		"acct_no": "0033335555",
		"bank": 1,
		"acct_pin": 1234,
		"acct_bal": 25000
	},
	{
		"acct_id": 4,
		"acct_name": "ELIZABETH ADAMU",
		"acct_no": "0022334455",
		"bank": 4,
		"acct_pin": 1234,
		"acct_bal": 30000
	}
];

let lastId;
let bBank;
let amount;



// PROGRAM STARTS HERE
alert("Welcome to Ultimate Bank");
let option;


// BANK MENU FUNCTION 
let ultimateBank = () => {
	option = Number(prompt("Home Menu \n1 - Create an Account\n2 - Change Pin \n3 - Perform Transaction \n 0 - Exit"));
	if (isNaN(option)) {
		ultimateBank();
	}
	else if (option === 1) {
		// Create Account 
		let firstName = prompt("Enter your first name");
		let lastName = prompt("Enter your last name");

		createAccount(lastId, firstName, lastName, generateAccountNo());
		lastId === userAccount.length;
		alert(`Account created successfully \n\nAccount Details: \nAccount Name: ${userAccount[lastId].acct_name}\nAccount Number: ${userAccount[lastId].acct_no} \nBANK: ${bankList(userAccount[lastId].bank)} \nAccount Pin: ${userAccount[lastId].acct_pin}`);
		ultimateBank();
	}
	else if (option === 2) {
		// To Change Pin
		let account_no = prompt("Please enter your card by Typing Account Number");
		confirmAccount(account_no, option);
		ultimateBank();
	}
	else if (option === 3) {
		// To Perform Transaction 
		let account_no = prompt("Please enter your card by Typing Account Number");
		confirmAccount(account_no, option);
		ultimateBank();
	}
	else if (option === 0) {
		// exit();
	}
	else {
		alert(" Invalid Input Try Again!");
		ultimateBank();
	}
}





/************************** 
 // FEATURES FUNTIONS
 ***************************
 */ 
let generateAccountNo = () => {
	lastId = userAccount.length;
	// let startAcct = 22334455;
	let lastAccount = userAccount[lastId - 1].acct_no;
	let startAcct = Number(lastAccount.slice(2));
	console.log(startAcct);
	let genAccount = startAcct + 2;
	let accountNo = "00" + genAccount;
	return accountNo;
}

let createAccount = (lastId, firstName, lastName, acctNo) => {
	lastId++
	userAccount.push(
		{
			"acct_id": lastId,
			"acct_name": `${firstName} ${lastName}`,
			"acct_no": acctNo,
			"bank": 2,
			"acct_pin": 1234,
			"acct_bal": 0,
		}
	)
}


// CONFIRM ACCOUNT 
let confirmAccount = (account_no, option) => {
	let opin;
	userAccount.forEach(item => {
		if (item.acct_no === account_no) {
			if (option === 2) {
				opin = Number(prompt("Please enter your pin"));
				let prevpin = item.acct_pin;
				changePin(account_no, prevpin, opin);
			}
			else if (option === 3) {
				let transaction = Number(prompt("Options \n1 - Transfer \n2 - Deposit \n3 - Check Balance\n0 - Exit"));
				performTransaction(transaction, item.acct_no, item.acct_pin)

			}
			else {

			}
		}
	});
};



let performTransaction = (trans, sender, acctpin) => {
	if (trans === 1) { //TRANSFER FEATURES
		let pin = Number(prompt("Enter your pin"));
		if (acctpin === pin) {
			let ben_acct = prompt("Enter beneficiary's account number");
			let benName;
			let benAccount;
			let benBank;
			let benBalance;

			let senderName;
			let senderAccount;
			let senderBank;
			let senderBal;
			userAccount.forEach(acct => {
				if (acct.acct_no === ben_acct) {
					bBank = Number(prompt("Pleases Select receivers bank \n\n 1 - ACCESS BANK \n 2 - ULTIMATE \n 3 - ZENITH BANK \n 4 - UBA "));
					if (acct.bank === bBank) {
						confirm(`Please confirm Beneficiary's details \n\nBeneficiaries Name: ${acct.acct_name}\nBeneficiaries Account: ${acct.acct_no}\nBeneficiaries Bank: ${bankList(bBank)} \n`);
						benName = acct.acct_name;
						benAccount = acct.acct_no;
						benBank = acct.bank;
						benBalance = acct.acct_bal;
						amount = Number(prompt("Please Enter Transfer amount"));
						confirm(`Confirm Details \n\n Beneficiaries Name: ${benName}\n Beneficiaries Account: ${benAccount}\n Beneficiaries Bank: ${bankList(benBank)} \n Amount: #${amount}`);
						acct.acct_bal = benBalance + amount;
						benBalance = acct.acct_bal;
					}
					else {
						alert("Invalid account details")
					}
				}

				if (acct.acct_no === sender) {
					senderName = acct.acct_name;
					senderAccount = acct.acct_no;
					senderBank = acct.bank;
					senderBal = acct.acct_bal;
					if (senderBal >= amount) {
						acct.acct_bal = senderBal - amount;
					}
				}
			});

			if (senderBal >= amount) {
				senderBal = senderBal - amount;
				alert(`Transfer of ${amount} was successful \nThank you for Banking with us!`);
				alert(`Sender Account Name:  ${senderName}\nSender Account Number: ${senderAccount}\nSender Balance: #${senderBal}\n\nBeneficiaries Account Name: ${benName} \nBeneficiaries Account Number: ${benAccount}\nBeneficiaries Bank: ${bankList(benBank)}\nBeneficiaries Balance: #${benBalance}`);
			}
			else {
				alert("Insufficient Balance");
			}
		}
	}
	else if (trans === 3) { // CHECK ACCOUNT BALANCE AND DETAILS
		let pin = Number(prompt("Enter your pin"));
		userAccount.forEach(acct => {
			if (acct.acct_no === sender) {
				if (acct.acct_pin === pin) {
					alert(`Your Account Details: \n\nAccount Name: ${acct.acct_name}\nAccount Number: ${acct.acct_no}\nBank Name: ${bankList(acct.bank)} \nAccount Balance: #${acct.acct_bal}`);
				}
				else {
					alert("Incorrect pin, you have 2 trials left, or your accound would be blocked")
				}
			}
		});
	}
	else if (trans === 2) { // DEPOSIT
		let pin = Number(prompt("Enter your pin"));
		userAccount.forEach(acct => {
			if (acct.acct_no === sender) {
				if (acct.acct_pin === pin) {
					confirm(`Your Account Details: \n\nAccount Name: ${acct.acct_name}\nAccount Number: ${acct.acct_no}\nBank Name: ${bankList(acct.bank)} \nAccount Balance: ${acct.acct_bal}`);
					let deposit = Number(prompt("Enter the Amount you wish to Deposit"));
					acct.acct_bal += deposit;
					alert(`You have successfully deposited #${deposit} into your Account \nThank you for Banking with us!`);
				}
				else {
					alert("Incorrect pin, you have 2 trials left, or your accound would be blocked")
				}
			}
		});
	}
}


let changePin = (account_no, prevpin, oldpin) => {
	if (prevpin === oldpin) {
		let newpin = Number(prompt("Please enter New pin"));
		let confirmpin = Number(prompt("Please confirm pin"));
		if (newpin === confirmpin) {
			userAccount.forEach(item => {
				if (item.acct_no === account_no) {
						item.acct_pin = confirmpin;
				}
			});
			alert(`Your pin has been changed successfully\n Old pin: ${oldpin} \n New pin: ${confirmpin}`);
		}
	}
}


// LIST OF BANKS WITH THEIR IDS 
let bankList = (bankId) => {
	let bankName;
	if (bankId === 1) {
		bankName = "ACCESS BANK";
	}
	else if (bankId === 2) {
		bankName = "ULTIMATE BANK";
	}
	else if (bankId === 3) {
		bankName = "ZENITH BANK";
	}
	else if (bankId === 4) {
		bankName = "UNITED BANK OF AFRICA";
	}
	else {
		bBank = Number(prompt("Invalid bank selected \nSelect receivers bank \n\n 1 - ACCESS BANK \n 2 - ULTIMATE \n 3 - ZENITH BANK \n 4 - UBA "));
		bankList(bBank);
	}
	return bankName;
}




ultimateBank();