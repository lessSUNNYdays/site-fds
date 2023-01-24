
navbarLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
  });
});
function showModal(id) {
  let modal = document.getElementById("character" + id + "-modal");
  modal.style.display = "block";
}

function closeModal(id) {
  let modal = document.getElementById("character" + id + "-modal");
  modal.style.display = "none";
}
