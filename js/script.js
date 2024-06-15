let activeNav = document.querySelectorAll(".nav-ele");
let sideData = document.getElementById("side-data");
let mainData = document.getElementById("main-data");
let chapterName = document.querySelectorAll(".chapter-name");

activeNav.forEach((e) => {
  e.addEventListener("click", (event) => {
    activeNav.forEach((navElement) => {
      if (navElement !== e) {
        navElement.classList.remove("nav-active");
      }
    });
    e.classList.add("nav-active");
    sideData.innerHTML = physicsDataHTML;
    mainData.innerHTML = `<p>main data: ${e.innerHTML}</p>`;
    console.log(e);

  });
});


chapterName.forEach((chapter)=>{

  chapter.addEventListener("click", (e)=>{
    chapterName.forEach((e)=>{
      e.nextElementSibling.classList.remove("chapter-active");
      // border-bottom: 2px solid yellow;
      // conv this to js
      e.style.borderBottom = "none";
      
    });
    console.log(chapter.nextElementSibling);
    chapter.style.borderBottom = "2px solid #37393b";
    chapter.nextElementSibling.classList.add("chapter-active");

  });
});
