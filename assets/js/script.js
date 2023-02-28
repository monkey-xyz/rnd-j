const result_box = document.querySelector("#results");
const pool_box = document.querySelector("#pool");
const submit_box = document.querySelector("#submit-form");

const formSubmit = (e) => {
  e.preventDefault();

  var opt = document.querySelector("#sg").value.trim();

  if (opt) {
    printOption(opt);
  } else {
    document.querySelector("error-message").innerHTML("You can't leave this empty!");
  }
}

const printOption = (txt) => {
  result_box.insertAdjacentHTML(
    "beforebegin",
    '<div>' + txt + '</div>' + '<button> <i class="fa-solid fa-xmark"></i> </button>'
  )
}

const selection = () => {
  Math.random();
}

submit_box.addEventListener("submit", formSubmit);