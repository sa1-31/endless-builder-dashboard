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

builders.forEach((b) => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <h3>${b.name}</h3>
    <p><strong>${b.contributions}</strong> contributions</p>
    <p>${b.level}</p>
    <div class="badges">
      ${b.types.map(t => `<span>${t}</span>`).join("")}
    </div>
  `;

  container.appendChild(div);
});
