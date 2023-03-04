const quotes = document.querySelector(".quotes");
const dice = document.querySelector(".dice");

const fetchQuotes = async () => {
  const reponse = await fetch("https://meowfacts.herokuapp.com/");
  if (reponse.ok) {
    const result = await reponse.json();
    return result.data[0];
  }
};

const renderQuotes = async () => {
  quotes.textContent = "Loading...";
  quotes.style.color = "var(--neon-green)";

  const data = await fetchQuotes();

  if (data) {
    quotes.style.color = "var(--light-cyan)";
    quotes.textContent = data;
  } else {
    quotes.textContent = "";
  }
};

dice.addEventListener("click", () => {
  renderQuotes();
});

renderQuotes();
