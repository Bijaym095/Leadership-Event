//closing side navigation for mobile and tablet screens
const closeBtn = document.querySelector("#close");

closeBtn.addEventListener("click", () => {
  const linksContainer = document.querySelector("#navbarNavDropdown");
  linksContainer.classList.remove("show");
});

//making active scroll navigation
window.addEventListener("scroll", () => {
  const position = scrollY;

  console.log(position);
});

console.log("hi");
