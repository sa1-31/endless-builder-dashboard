const builders = [
  {
    name: "Sabir",
    contributions: 14,
    level: "Builder 2.0",
    types: ["Code", "Docs", "Tool"]
  },
  {
    name: "BuilderX",
    contributions: 9,
    level: "Builder 1.0",
    types: ["Docs"]
  },
  {
    name: "CoreDev",
    contributions: 21,
    level: "Builder 3.0",
    types: ["Code", "Tool"]
  }
];

const container = document.getElementById("builders");
const max = Math.max(...builders.map(b => b.contributions));

builders.forEach(b => {
  const div = document.createElement("div");
  div.className = "card";

  if (b.contributions === max) {
    div.classList.add("top-builder");
  }

  div.innerHTML = `
    ${b.contributions === max ? `<span class="top-badge">🏆 Top Builder</span>` : ""}
    <h3>${b.name}</h3>
    <p><strong>${b.contributions}</strong> contributions</p>
    <p>${b.level}</p>
    <div class="badges">
      ${b.types.map(t => {
        const icon =
          t === "Code" ? "💻" :
          t === "Docs" ? "📚" :
          t === "Tool" ? "🛠️" : "🧪";
        return `<span>${icon} ${t}</span>`;
      }).join("")}
    </div>
  `;

  container.appendChild(div);
});

/* NAV */
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* SUBMIT */
function submitForm() {
  const repo = document.getElementById("repo").value;
  const twitter = document.getElementById("twitter").value;

  if (!repo || !twitter) {
    alert("Please provide both GitHub and Twitter links.");
    return;
  }

  alert("✅ Contribution submitted!\n\nThis is a demo submission.");
}
