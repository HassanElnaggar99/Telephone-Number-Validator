const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const checkNumber = () => {
  const input = userInput.value;
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }
  const regex1 = /(?:^)\s*(1)? ?(\d{3})[ -]?(\d{3})[ -]?(\d{4})\s*(?:$)/;
  const regex2 = /(?:^)\s*(1)? ?\((\d{3})\)[ -]?(\d{3})[ -]?(\d{4})\s*(?:$)/;
  const isValid = regex1.test(input) || regex2.test(input);
  if (isValid) {
    resultsDiv.innerHTML += `<p class="valid">Valid US number: ${input}</p>`;
  } else {
    resultsDiv.innerHTML += `<p class="invalid">Invalid US number: ${input}</p>`;
  }

  userInput.value = "";
}

const clearResults = () => {
  resultsDiv.innerHTML = "";
}

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkNumber();
  }
})

checkBtn.addEventListener("click", checkNumber)

clearBtn.addEventListener("click", clearResults)
