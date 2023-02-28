const result_box = document.querySelector("#results");
const pool_box = document.querySelector("#pool");
const submit_box = document.querySelector("#submit-form");

const cc = [];

const formSubmit = (e) => {
  e.preventDefault();

  var opt = document.querySelector("#sg").value.trim();

  if (opt) {
    cc.push(opt)
  } else {
    document.querySelector("error-message").innerHTML("You can't leave this empty!");
  }

  printOption();
}

const printOption = () => {
  var o_div = document.createElement("div");
  var o_button = document.createElement("button");

  for (let i = 0; i < cc.length; i++) {
    result_box.appendChild(o_div);
    o_div.textContent = cc[i];
    o_div.appendChild(o_button);
    o_button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    o_button.setAttribute("item-index", i);

    o_button.onclick = function() {
      cc.pop[this.getAttribute("item-index")]
      console.log(cc)
    }
  }
}

const selection = () => {
  Math.random();
}

printOption;

submit_box.addEventListener("submit", formSubmit);