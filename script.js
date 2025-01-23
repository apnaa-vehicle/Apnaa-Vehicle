let header = document.querySelector(".header-main");
let navbar = document.querySelector(".navbar");
let modal = document.getElementById("modal");
const navElements = document.querySelector(".navbar");
const headerMain = document.querySelector(".header-main");
const boxContainer = document.querySelector(".box-container");
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  if (!isModalOpen()) {
    if (window.scrollY > 20) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
      navbar.classList.remove("active");
    }
  }
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    headerMain.style.backgroundColor = "white";
    navElements.style.color = "black";

    const links = navbar.querySelectorAll("a");
    links.forEach((link) => {
      link.style.color = "black";
    });
  } else {
    headerMain.style.backgroundColor = "transparent";
    navbar.style.color = "white";

    const links = navbar.querySelectorAll("a");
    links.forEach((link) => {
      link.style.color = "white";
    });
  }
});

setTimeout(() => {
  showModal();
}, 5000);

function showModal() {
  modal.style.display = "block";
  header.classList.remove("active");
}

function closeModal() {
  modal.style.display = "none";
}

function isModalOpen() {
  return modal.style.display === "block";
}
