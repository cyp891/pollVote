const form = document.getElementById("poll-form");
const results = document.getElementById("results");

const poll = new Map();
poll.set("React", 0);
poll.set("Vue", 0);
poll.set("Angular", 0);
poll.set("Svelte", 0);
poll.set("Other", 0);

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const selectedOption = document.querySelector(
    "input[name='poll-option']:checked"
  );
  if (!selectedOption) {
    alert("Please select a poll option");
    return;
  }
  const voteCount = poll.get(selectedOption.value);
  poll.set(selectedOption.value, voteCount + 1);
  displayResults();
  form.querySelectorAll("input", "button").forEach((element) => {
    element.setAttribute("disabled", true);
  });
}

function displayResults() {
  results.innerHTML = "";
  for (let [option, count] of poll) {
    const optionElement = document.createElement("div");
    optionElement.classList.add(
      "border-bottom",
      "p-s",
      "d-flex",
      "justify-content-between"
    );

    optionElement.innerHTML = `<strong>${option}: ${count} votes</strong>`;

    results.appendChild(optionElement);
  }
}
