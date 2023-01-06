//closing side navigation for mobile and tablet screens
const closeBtn = document.querySelector("#close");

closeBtn.addEventListener("click", () => {
  const linksContainer = document.querySelector("#navbarNavDropdown");
  linksContainer.classList.remove("show");
});

//  navigation-link active on scroll

window.addEventListener("scroll", () => {
  const scrollPosition = scrollY;
  const sections = document.querySelectorAll(".section[id]");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollPosition >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  //removing classlink from every nav-links as default
  const navLinks = document.querySelectorAll(".navbar__nav-item a ");

  navLinks.forEach((li) => {
    li.classList.remove("active");
    // console.log(li);
    console.log(li.getAttribute);

    if (li.dataset.id === current) {
      li.classList.add("active");
    }
  });
});
