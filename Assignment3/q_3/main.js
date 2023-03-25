let password = document.querySelector("#password");

const colors = {
  error: "red",
  correct: "green",
};

const validate = {
  passed: false,
  errors: [],
  is_passed: ["Password passed", "Password not accepted"],
};

const validate_errors = [
  "Minimum 8 characters.",
  "Should contain at least 2 lowercase letters.",
  "Should contain at least 2 uppercase letters.",
  "Should contain at least numbers.",
  "Should contain a symbol from # $ % ^",
];

function password_validation(password) {
  const length = document.querySelector(".length");
  const lowercase = document.querySelector(".lowercase");
  const uppercase = document.querySelector(".uppercase");
  const symbol = document.querySelector(".symbol");
  const number = document.querySelector(".number");

  validate.errors = [];

  password = password.value;
  password = password.trim();

  if (password.length < 8) {
    length.style.color = colors.error;
    validate.errors.push(validate_errors[0]);
  } else {
    length.style.color = colors.correct;
  }

  if (/[0-9]/i.test(password)) {
    number.style.color = colors.correct;
  } else {
    validate.errors.push(validate_errors[3]);
    number.style.color = colors.error;
  }

  if (/.*[A-Z].*[A-Z]/.test(password)) {
    uppercase.style.color = colors.correct;
  } else {
    validate.errors.push(validate_errors[2]);
    uppercase.style.color = colors.error;
  }

  if (/.*[a-z].*[a-z]/.test(password)) {
    lowercase.style.color = colors.correct;
  } else {
    validate.errors.push(validate_errors[1]);
    lowercase.style.color = colors.error;
  }

  if (/[\&\#\^\$]/.test(password)) {
    symbol.style.color = colors.correct;
  } else {
    validate.errors.push(validate_errors[4]);
    symbol.style.color = colors.error;
  }

  validate.errors.length == 0
    ? (validate.passed = true)
    : (validate.passed = false);

  is_validate(validate.passed);
  show_errors(validate.errors);
}

function is_validate(passed) {
  const text_block = document.querySelector("#passed-text");

  if (passed) {
    text_block.textContent = validate.is_passed[0];
    text_block.style.color = colors.correct;
  } else {
    text_block.textContent = validate.is_passed[1];
    text_block.style.color = colors.error;
  }
}

function show_password() {
  password.getAttribute("type") == "password"
    ? password.setAttribute("type", "text")
    : password.setAttribute("type", "password");
}

// Optional
function show_errors(errors) {
  return console.log(errors);
}
