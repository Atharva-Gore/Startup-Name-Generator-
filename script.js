const categories = {
  tech: ["Cloud", "Sync", "Logic", "Byte", "Code", "Soft", "Nova", "X"],
  ai: ["Neuro", "Mind", "Intelli", "Bot", "Vision", "AI", "Deep", "Core"],
  finance: ["Coin", "Pay", "Bank", "Wallet", "Invest", "Fund", "Capital"],
  health: ["Medi", "Care", "Vital", "Fit", "Well", "Pulse", "Doc"],
  education: ["Learn", "Skill", "Edu", "Bright", "Know", "Tutor", "Scholar"],
  fashion: ["Style", "Mode", "Trend", "Look", "Glam", "Vibe", "Chic"],
  food: ["Bite", "Tasty", "Chef", "Yum", "Grill", "Snack", "Delish"],
  travel: ["Trip", "Wander", "Globe", "Jet", "Explore", "Trek", "Nomad"]
};

const suffixes = [
  "ify", "ly", "ster", "genics", "scape", "works", "hub", "base", "labs", "verse"
];

const resultDiv = document.getElementById("result");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoritesList = document.getElementById("favorites");
const toggleMode = document.getElementById("toggleMode");

let currentName = "";

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateName() {
  const category = document.getElementById("category").value;
  const prefix = getRandomItem(categories[category]);
  const suffix = getRandomItem(suffixes);
  const random = Math.random() < 0.3 ? getRandomItem(categories[category]) : "";
  const name = (prefix + random + suffix).replace(/[^a-zA-Z]/g, '');

  currentName = name;
  resultDiv.innerHTML = `
    <a href="https://www.namecheap.com/domains/registration/results/?domain=${name.toLowerCase()}.com" target="_blank">${name}</a>
  `;
  favoriteBtn.style.display = "inline-block";
}

favoriteBtn.onclick = () => {
  if (!currentName) return;

  const li = document.createElement("li");
  li.innerText = currentName;
  favoritesList.appendChild(li);

  const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
  saved.push(currentName);
  localStorage.setItem("favorites", JSON.stringify(saved));

  favoriteBtn.style.display = "none";
};

function loadFavorites() {
  const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
  saved.forEach(name => {
    const li = document.createElement("li");
    li.innerText = name;
    favoritesList.appendChild(li);
  });
}

loadFavorites();

// Dark mode toggle
let darkMode = localStorage.getItem("darkMode") === "true";
if (darkMode) document.body.classList.add("dark");

toggleMode.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
};
