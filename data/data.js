
// const physicsDataJSON = {
//   sidebar: {
//     chapters: [
//       {
//         name: "Mechanics",
//         details: [
//           { id: "kinematics", label: "Kinematics" },
//           { id: "newtons-laws", label: "Newton's Laws of Motion" },
//           { id: "work-energy", label: "Work, Energy, and Power" },
//           { id: "momentum", label: "Linear Momentum" },
//         ],
//       },
//       {
//         name: "Thermodynamics",
//         details: [
//           { id: "laws-thermodynamics", label: "Laws of Thermodynamics" },
//           { id: "heat-transfer", label: "Heat Transfer" },
//           { id: "thermodynamic-processes", label: "Thermodynamic Processes" },
//         ],
//       },
//       {
//         name: "Optics",
//         details: [
//           { id: "geometrical-optics", label: "Geometrical Optics" },
//           { id: "wave-optics", label: "Wave Optics" },
//           { id: "modern-optics", label: "Modern Optics" },
//         ],
//       },
//     ],
//   },
// };

let phySyllabus=  ``;
fetch(`./data/data.json`).then(response=>{
  return response.json();
}).then(data => {
   // Handle the JSON data
})
