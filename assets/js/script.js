const result_box = document.querySelector("#results");
const pool_box = document.querySelector("#pool");
const submit_box = document.querySelector("#submit-form");
const select_box = document.querySelector("#select-form");


const cc = [];

const formSubmit = (e) => {
  e.preventDefault();

  var opt = document.querySelector("#sg").value.trim();

  if (opt) {
    cc.push(opt)

    document.querySelector("#error-message-submit").innerHTML = "";
  } else {
    document.querySelector("#error-message-submit").innerHTML = "You can't leave this empty!";
  }

  console.log(cc)

  printOption();
};

const printOption = () => {
  var o_div = document.createElement("div");
  var o_button = document.createElement("button");

  for (let i = 0; i < cc.length; i++) {
    pool_box.appendChild(o_div);
    o_div.textContent = cc[i];
    o_div.classList.add("rounded-end-2", "bg-dark-subtle");
    o_div.appendChild(o_button);
    o_button.innerHTML = '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
    o_button.setAttribute("item-index", i);

    o_button.onclick = function() {
      cc.splice(this.getAttribute("item-index"), 1)
      this.parentElement.remove()
    }
  }
};

const optionSelect = (rep) => {
  result_box.innerHTML = "";

  for (let i = 0; i < rep; i++) {
    result_box.insertAdjacentHTML(
      "afterbegin",
      "<p>" + cc[Math.floor(Math.random() * cc.length)]) + "</p>";
  }
};

const selectSubmit = (e) => {
  e.preventDefault();

  document.querySelector("#error-message-select").innerHTML = "";

  if (cc.length < 1) {
    document.querySelector("#error-message-select").innerHTML = "You don't have enough entries in the pool for this.";

    result_box.innerHTML = "";

    return;
  } else {
    optionSelect(opt);
    localStorage.setItem("previous", JSON.stringify(cc));
  }
};

const prevPool = () => {
  var previousPool = JSON.parse(localStorage.getItem("previous"));
  // console.log(previousPool)

  if (previousPool) {
    document.querySelector("#history").innerHTML = "<p>" + previousPool + "</p>";

    console.log(previousPool)
  }
}

const deleteHistory = () => {
  localStorage.clear();
}

printOption;

submit_box.addEventListener("submit", formSubmit);
select_box.addEventListener("submit", selectSubmit);