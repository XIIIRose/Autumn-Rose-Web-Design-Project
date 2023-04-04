
//working
function chkUsername() {
	var uname=document.getElementById("userName");
	var error=document.getElementById("errUname");
	if(uname.value.length===0) {
		error.innerHTML="Please enter a value.";
		uname.style.borderColor="red";
		return false;
	}
	if(uname.value.length<6 || uname.value.length>50) {
		error.innerHTML="Username must be 6-50 characters.";
		uname.style.borderColor="red";
		return false;
	}
	uname.style.borderColor="lightgreen";
	error.innerHTML="";
	return true;
}

function chkPass() {
	var pw=document.getElementById("password");
	var regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,50}$/;
	var errorpw=document.getElementById("passErr");
	if(pw.value.length===0){
		errorpw.innerHTML="Please enter a password.";			
		pw.style.borderColor="red";
		return false;
	}
	if(pw.value.length<8 || pw.value.length>50) {
		errorpw.innerHTML="Password must be 8-50 characters."
		pw.style.borderColor="red";	
		return false;
	}
	console.log(pw);
	if(!regex.test(pw.value)) {
		errorpw.innerHTML="Password must contain at least one of each: A-Z, a-z, 0-9, and [!@#$%^&*].";
		pw.style.borderColor="red";
		return false;
	}
	console.log(pw);
	errorpw.innerHTML="";
	pw.style.borderColor="lightgreen";
	return true;
}

function chkPassword() {
	var vp=document.getElementById("verpassword");
	var regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,50}$/;
	var error=document.getElementById("verpassErr");
	if(vp.value.length===0){
		error.innerHTML="Please re-enter your password.";
		vp.style.borderColor="red";
		return false;
	}
	if(chkPass()){
		var pw=document.getElementById("password");
		if(pw.value!=vp.value) {
			error.innerHTML="Passwords do not match.";
			vp.style.borderColor="red";
			return false;
		}
	}
	error.innerHTML="";
	vp.style.borderColor="lightgreen";
	return true;
}

function chkFname() {
	var fname=document.getElementById("firstName");
	var error=document.getElementById("fnameErr");
	if(fname.value.length===0) {
		error.innerHTML="Please enter your first name.";
		fname.style.borderColor="red";
		return false;
	}
	if(fname.value.length>50) {
		error.innerHTML="First name must be less than 50 characters.";
		fname.style.borderColor="red";
		return false;
	}
	fname.style.borderColor="lightgreen";
	error.innerHTML="";
	return true;
}
function chkLname() {
	var lname=document.getElementById("lastName");
	var error=document.getElementById("lnameErr");
	if(lname.value.length===0) {
		error.innerHTML="Please enter your last name.";
		lname.style.borderColor="red";
		return false;
	}
	if(lname.value.length>50) {
		error.innerHTML="Last name must be less than 50 characters.";
		lname.style.borderColor="red";
		return false;
	}
	lname.style.borderColor="lightgreen";
	error.innerHTML="";
	return true;
}

function chkAddr1() {
	var addr1=document.getElementById("addressLine1");
	var error=document.getElementById("addr1Err");
	if(addr1.value.length===0) {
		error.innerHTML="Please enter your address.";
		addr1.style.borderColor="red";
		return false;
	}
	if(addr1.value.length>100) {
		error.innerHTML="Address may not exceed 100 characters.";
		addr1.style.borderColor="red";
		return false;
	}
	addr1.style.borderColor="lightgreen";
	error.innerHTML="";
	return true;
}
function chkAddr2() {
	var addr2=document.getElementById("addressLine2");
	var error=document.getElementById("addr2Err");
	if(addr2.value.length>100) {
		error.innerHTML="Address may not exceed 100 characters.";
		addr2.style.borderColor="red";
		return false;
	}
	addr2.style.borderColor="lightgreen";
	error.innerHTML="";
	return true;
}

function chkCity() {
	var city=document.getElementById("city");
	var error=document.getElementById("cityErr");
	if(city.value.length===0) {
		error.innerHTML="Please enter your city.";
		city.style.borderColor="red";
		return false;
	}
	if(city.value.length>50) {
		error.innerHTML="City may not exceed 50 characters.";
		city.style.borderColor="red";
		return false;
	}
	city.style.borderColor="lightgreen";
	error.innerHTML="";
	return true;
}

function chkState() {
	var state=document.getElementById("state");
	var error=document.getElementById("stateErr");
	if(state.value.length===0) {
		error.innerHTML="Please select a state.";
		state.style.borderColor="red";
		return false;
	}
	if(state.value.length>52) {
		error.innerHTML="State may not exceed 52.";
		state.style.borderColor="red";
		return false;
	}
	state.style.borderColor="lightgreen";
	error.innerHTML="";
	return true;
}

function chkZip() {
	var zip=document.getElementById("zipCode");
	var error=document.getElementById("zipErr");
	var regex=/^[0-9-]+$/;
	if(zip.value.length===0) {
		error.innerHTML="Please enter a zip code.";
		zip.style.borderColor="red";
		return false;
	}
	if(zip.value.length<5) {
		error.innerHTML="Zipcode must be between at least 5 numbers.";
		zip.style.borderColor="red";
		return false;
	}
	if(!regex.test(zip.value)) {
		error.innerHTML="Zipcode may only contain numbers and '-'.";
		zip.style.borderColor="red";
		return false;
	}
	if(zip.value.length>5) {
		zip.value=[zip.value.slice(0,5), "-", zip.value.slice(5)].join("");
	}
	zip.style.borderColor="lightgreen";
	error.innerHTML="";
	return true;
}

function chkPhone() {
	var phone=document.getElementById("phoneNumber");
	var error=document.getElementById("phoneErr");
	var regex=/^[0-9-]+$/;
	if(phone.value.length===0){
		error.innerHTML="Please enter a phone number.";
		phone.style.borderColor="red";
		return false;
	}
	if(phone.value.length<10) {
		error.innerHTML="Phone number must be 10 digits.";
		phone.style.borderColor="red";
		return false;
	}
	if(phone.value[3]!="-") {
		phone.value=[phone.value.slice(0,3), "-", phone.value.slice(3)].join("");
	}
	if(phone.value[7]!="-") {
		phone.value=[phone.value.slice(0,7), "-", phone.value.slice(7)].join("");
	}
	console.log(phone.value);
	if(!regex.test(phone.value)) {
		error.innerHTML="Phone number may only contain numbers and dashes.";
		phone.style.borderColor="red";
		return false;
	}
	phone.style.borderColor="lightgreen";
	error.innerHTML="";
	return true;
}

function chkEmail() {
	var email=document.getElementById("email");
	var error=document.getElementById("emailErr");
	var regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(email.value.length===0) {
		error.innerHTML="Please enter an email.";
		email.style.borderColor="red";
		return false;
	}
	if(!regex.test(email.value)) {
		error.innerHTML="Email must be in x@x.x form.";
		email.style.borderColor="red";
		return false;
	}
	email.style.borderColor="lightgreen";
	error.innerHTML="";
	return true;
}

function chkGender() {
	var gender=document.getElementById("gender");
	var error=document.getElementById("genderErr");
	if(gender.value===null) {
		error.innerHTML="Please select a gender.";
		return false;
	}
	if(gender.value.length>50) {
		error.innerHTML="Gender cannot exceed 50 characters.";
		return false;
	}
	return true;
}

function chkMaritalStatus() {
	var ms=document.getElementById("maritalStatus");
	var error=document.getElementById("msErr");
	if(ms.value===null) {
		error.innerHTML="Please select a marital status.";
		return false;
	}
	if(ms.value.length>50) {
		error.innerHTML="Marital status cannot exceed 50 characters.";
		return false;
	}
	return true;
}

function chkDOB() {
	var dob=document.getElementById("birthDay");
	var error=document.getElementById("bdayErr");
	var regex=/^\d{2}\/\d{2}\/\d{4}$/;
	if(dob.value.length===0) {
		error.innerHTML="Please enter your date of birth.";
		dob.style.borderColor="red";
		return false;
	}
	if(!regex.test(dob.value)) {
		error.innerHTML="Date of birth must be in mm/dd/yyyy form.";
		dob.style.borderColor="red";
		return false;
	}
	dob.style.borderColor="lightgreen";
	error.innerHTML="";
	return true;
}

function chkFields() {
	var valid=true;
	if(!chkUsername())
		valid=false;
	
	if(!chkPassword())
		valid=false;
	
	if(!chkFname())
		valid=false;
	
	if(!chkLname())
		valid-false;
	
	if(!chkAddr1())
		valid=false;
	
	if(!chkAddr2())
		valid=false;
	
	if(!chkCity())
		valid=false;
	
	if(!chkState())
		valid=false;
	
	if(!chkZip())
		valid=false;
	
	if(!chkPhone())
		valid=false;
	
	if(!chkEmail())
		valid=false;
	
	if(!chkGender())
		valid=false;
	
	if(!chkMaritalStatus())
		valid=false;
	
	if(!chkDOB())
		valid=false;
	return valid;
}

function resetFields() {
	location.reload();
}
