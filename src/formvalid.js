const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

//event addition

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 3) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  if (usernameVal === "") {
    setErrormsg(username, "username can not be blank");
  } else if (usernameVal.length < 3) {
    setErrormsg(username, "username can not less then 3 charaters");
  } else {
    setSuccessmsg(username);
  }

  //   //validate email id
  if (emailVal === "") {
    setErrormsg(email, "username can not be blank");
  } else if (!isEmail(emailVal)) {
    setErrormsg(email, "Email not valid");
  } else {
    setSuccessmsg(email);
  }

  //Phone validation
  if (phoneVal === "") {
    setErrormsg(phoneVal, "Phone Number can not be blank");
  } else if (phoneVal.length < 10) {
    setErrormsg(phoneVal, "Phone number can not be less then 10 digits");
  } else {
    setSuccessmsg(phoneVal);
  }

  //password validation
  if (password === "") {
    setErrormsg(password, "Password can not be blank");
  } else if (passwordVal.length < 6) {
    setErrormsg(passwordVal, "Password can not be less then6 characters");
  } else {
    setSuccessmsg(passwordVal);
  }
  // confirm password validation
  if (cpassword === "") {
    setErrormsg(cpassword, "Password can not be blank");
  } else if (cpasswordVal !== passwordVal) {
    setErrormsg(cpasswordVal, "Password mismatch");
  } else {
    setSuccessmsg(cpasswordVal);
  }
};

function setErrormsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessmsg(input) {
  const formControl = input.parentElement;
  formControl.class = "form-control success";
}
