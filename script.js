const adjectives = ["Smart", "Quick", "Bright", "Tech", "Next", "Neo", "Cyber", "Auto", "AI"];
const nouns = ["Hive", "Nest", "Bot", "Verse", "Core", "Flow", "Labs", "Shift", "Pulse"];
const suffixes = ["ly", "ify", "hub", "gen", "base", "stack", "zone"];

let currentName = "";
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
renderFavorites();

// Generate a random startup name
function generateName() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  currentName = (adj + noun + suffix).toLowerCase();
  document.getElementById("generatedName").textContent = currentName;
  document.getElementById("domainStatus").textContent = "";
}

// Check if domain is available (mock logic)
function checkDomain() {
  if (!currentName) return alert("Generate a name first!");
  
  // Fake random check (simulate real domain check)
  const available = Math.random() > 0.5;
  document.getElementById("domainStatus").textContent = available 
    ? `✅ ${currentName}.com is likely available!`
    : `❌ ${currentName}.com is likely taken.`;
}

// Save to favorites
function addToFavorites() {
  if (!currentName || favorites.includes(currentName)) return;
  favorites.push(currentName);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderFavorites();
}

// Show favorites
function renderFavorites() {
  const list = document.getElementById("favoritesList");
  list.innerHTML = "";
  favorites.forEach(name => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${name}.com
      <button onclick="removeFavorite('${name}')">❌</button>
    `;
    list.appendChild(li);
  });
}

// Remove from favorites
function removeFavorite(name) {
  const index = favorites.indexOf(name);
  if (index > -1) {
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderFavorites();
  }
}

// Toggle dark mode
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
