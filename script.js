const techWords = ["cyber", "byte", "neuro", "quantum", "pixel", "cloud"];
const financeWords = ["quick", "fin", "wealth", "fund", "credit", "cash"];
const healthWords = ["care", "fit", "vital", "med", "heal", "life"];
const educationWords = ["learn", "edu", "wise", "skill", "campus", "academy"];
const randomWords = ["hub", "zone", "base", "flow", "spark", "sync", "link"];

function generateName() {
  const category = document.getElementById("category").value;
  let baseList = [];

  switch (category) {
    case "tech":
      baseList = techWords;
      break;
    case "finance":
      baseList = financeWords;
      break;
    case "health":
      baseList = healthWords;
      break;
    case "education":
      baseList = educationWords;
      break;
    default:
      baseList = randomWords;
  }

  const prefix = baseList[Math.floor(Math.random() * baseList.length)];
  const suffix = randomWords[Math.floor(Math.random() * randomWords.length)];
  const name = (prefix + suffix).toLowerCase();

  document.getElementById("output").textContent = name;
  document.getElementById("domainStatus").textContent = `✅ ${name}.com is likely available!`;
}

function checkDomain() {
  const name = document.getElementById("output").textContent;
  if (!name) return;
  const url = `https://www.namecheap.com/domains/registration/results/?domain=${name}.com`;
  window.open(url, "_blank");
}

function saveName() {
  const name = document.getElementById("output").textContent;
  if (!name) return;
  const list = document.getElementById("savedList");
  const li = document.createElement("li");
  li.textContent = name;
  list.appendChild(li);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
