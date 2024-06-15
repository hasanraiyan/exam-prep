
const physicsDataJSON = {
  sidebar: {
    chapters: [
      {
        name: "Mechanics",
        details: [
          { id: "kinematics", label: "Kinematics" },
          { id: "newtons-laws", label: "Newton's Laws of Motion" },
          { id: "work-energy", label: "Work, Energy, and Power" },
          { id: "momentum", label: "Linear Momentum" },
        ],
      },
      {
        name: "Thermodynamics",
        details: [
          { id: "laws-thermodynamics", label: "Laws of Thermodynamics" },
          { id: "heat-transfer", label: "Heat Transfer" },
          { id: "thermodynamic-processes", label: "Thermodynamic Processes" },
        ],
      },
      {
        name: "Optics",
        details: [
          { id: "geometrical-optics", label: "Geometrical Optics" },
          { id: "wave-optics", label: "Wave Optics" },
          { id: "modern-optics", label: "Modern Optics" },
        ],
      },
    ],
  },
};

physicsDataHTML = `
<div class="chapter-names">
  ${physicsDataJSON.sidebar.chapters
    .map(
      (chapter) => `
    <div class="chapter-name">
      <div class="chapter">${chapter.name}</div>
    </div>
    <ul class="chapter-details">
      ${chapter.details
        .map(
          (detail) => `
        <li>
          <input type="checkbox" id="${detail.id}">
          <label for="${detail.id}">${detail.label}</label>
        </li>
      `
        )
        .join("")}
    </ul>
  `
    )
    .join("")}
</div>
`;

console.log(physicsDataHTML);

// make a reusable function to get data
function getPhysicsData(chapterName, topicId) {}
