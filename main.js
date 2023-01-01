const closeBtn = document.querySelector("#close");
console.log(closeBtn);
closeBtn.addEventListener("click", () => {
  const linksContainer = document.querySelector("#navbarNavDropdown");
  linksContainer.classList.remove("show");
});
