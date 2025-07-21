const wordPools = {
  tech: {
    adjectives: ["Neo", "Smart", "Cyber", "Auto", "Next", "Quantum", "Deep", "Pixel"],
    nouns: ["Pulse", "Core", "Verse", "Bot", "Cloud", "Circuit", "Stack"]
  },
  finance: {
    adjectives: ["Safe", "Quick", "Bright", "Coin", "Cash", "Trust", "Vault"],
    nouns: ["Bank", "Ledger", "Capital", "Fund", "Pay", "Flow"]
  },
  health: {
    adjectives: ["Fit", "Vital", "Cura", "Heal", "Well", "Pure", "Zen"],
    nouns: ["Care", "Track", "Life", "Health", "Scan", "Dose"]
  },
  education: {
    adjectives: ["Learn", "Bright", "Edu", "Smart", "Skill", "Know", "Neo"],
    nouns: ["Mind", "Labs", "Verse", "Stack", "School", "Hub"]
  },
  custom: {
    adjectives: ["Bold", "Nova", "Quick", "Bright", "Ultra", "Vibe", "Next"],
    nouns: ["Nest", "Box", "Hive", "Core", "Desk", "Gen"]
  }
};

const suffixes = ["ly", "hub", "gen", "ify", "stack", "base", "io"];

let currentName = "";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
renderFavorites();

function generateName() {
  const category = document.getElementById("category").value;
  const words = wordPools[category] || wordPools["custom"];

  const adj = words.adjectives[Math.floor(Math.random() * words.adjectives.length)];
  const noun = words.nouns[Math.floor(Math.random() * words.nouns.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  currentName = (adj + noun + suffix).toLowerCase();
  document.getElementById("generatedName").textContent = currentName;
  document.getElementById("domainStatus").textContent = "";
}

function checkDomain() {
  if (!currentName) {
    alert("Generate a name first!");
    return;
  }

  const available = Math.random() > 0.4; // Simulate 60% availability
  document.getElementById("domainStatus").textContent = available
    ? `✅ ${currentName}.com is likely available!`
    : `❌ ${currentName}.com is likely taken.`;
}

function addToFavorites() {
  if (!currentName || favorites.includes(currentName)) return;
  favorites.push(currentName);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderFavorites();
}

function renderFavorites() {
  const list = document.getElementById("favoritesList");
  list.innerHTML = "";
  favorites.forEach(name => {
    const li = document.createElement("li");
    li.innerHTML = `
      🔹 ${name}.com
      <button onclick="removeFavorite('${name}')">🗑️</button>
    `;
    list.appendChild(li);
  });
}

function removeFavorite(name) {
  favorites = favorites.filter(n => n !== name);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderFavorites();
}

// Dark mode toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
