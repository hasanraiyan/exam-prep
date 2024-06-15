let activeNav = document.querySelectorAll(".nav-ele");
let sideData = document.getElementById("side-data");
let mainData = document.getElementById("main-data");
let chapterName = document.querySelectorAll(".chapter-name");


let data;
fetch(`./data/data.json`).then(response=>{
  return response.json();
}).then(file => {
  data=file; // Handle the JSON data
});

activeNav.forEach((e) => {
  e.addEventListener("click", (event) => {
    activeNav.forEach((navElement) => {
      if (navElement !== e) {
        navElement.classList.remove("nav-active");
      }
    });
    e.classList.add("nav-active");
    console.log("clicked");

    sideData.innerHTML = ""
    mainData.innerHTML = `<p>main data:</p>`;
    console.log(e);

  });
});


chapterName.forEach((chapter)=>{

  chapter.addEventListener("click", (e)=>{
    chapterName.forEach((e)=>{
      e.nextElementSibling.classList.remove("chapter-active");
      e.style.borderBottom = "none";
      
    });
    console.log(chapter.nextElementSibling);
    chapter.style.borderBottom = "2px solid #37393b";
    chapter.nextElementSibling.classList.add("chapter-active");

  });
});
