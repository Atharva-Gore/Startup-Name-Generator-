const techWords = ["AI", "Neuro", "Byte", "Quantum", "Cloud", "Pixel", "Nano"];
const financeWords = ["Fin", "Pay", "Bank", "Safe", "Invest", "Cash", "Coin"];
const healthWords = ["Medi", "Care", "Well", "Pulse", "Cure", "Vitals", "Thera"];
const educationWords = ["Learn", "Skill", "Mind", "Edu", "Tutor", "Path", "Acad"];
const randomWords = ["Spark", "Nest", "Core", "Shift", "Hive", "Loop", "Zen"];

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
      baseList = [...techWords, ...financeWords, ...healthWords, ...educationWords, ...randomWords];
  }

  const prefix = baseList[Math.floor(Math.random() * baseList.length)];
  const suffix = randomWords[Math.floor(Math.random() * randomWords.length)];
  const name = prefix + suffix;

  document.getElementById("output").textContent = `🚀 ${name}`;
}

function updateCategoryNote() {
  const category = document.getElementById("category").value;
  const notes = {
    tech: "🔍 Tech category creates AI and futuristic names.",
    finance: "💰 Finance names use trust, speed, and money-related words.",
    health: "🩺 Health names focus on wellness and care.",
    education: "📘 Education names are about learning and knowledge.",
    custom: "🎲 Random mix of brandable words for variety."
  };
  document.getElementById("categoryNote").textContent = notes[category] || "";
}
