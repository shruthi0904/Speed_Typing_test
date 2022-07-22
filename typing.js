let timerEl = document.getElementById("timer");
let spinnerEl = document.getElementById("spinner");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let resultEl = document.getElementById("result");
let counter = -1;

function requestQuote() {
    let options = {
        method: "GET",
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            counter = -1;
            let randomQuote = jsonData.content;
            quoteDisplayEl.textContent = randomQuote;
        });
}
let startTimer = function() {
    counter = counter + 1;
    timerEl.textContent = counter;
}
let uniqueId = setInterval(startTimer, 1000);

requestQuote();

submitBtnEl.addEventListener("click", function(event) {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        console.log(uniqueId);
        clearInterval(uniqueId);
        resultEl.textContent = "You typed in " + counter + " seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
});
resetBtnEl.addEventListener("click", function(event) {
    spinnerEl.classList.remove("d-none");
    quoteDisplayEl.textContent = "";
    quoteInputEl.value = "";
    requestQuote();
    startTimer();
});