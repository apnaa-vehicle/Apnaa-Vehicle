let header = document.querySelector(".header-main");
let navbar = document.querySelector(".navbar");
let modal = document.getElementById("modal");
const navElements = document.querySelector(".navbar");
const headerMain = document.querySelector(".header-main");
const boxContainer = document.querySelector(".box-container");
const menuButton = document.querySelector("#menu");
const menu = document.querySelector(".side-menu");
const menuCross = document.querySelector("#menu-cross");

window.onscroll = () => {
  if (!isModalOpen()) {
    if (window.scrollY > 0) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
      navbar.classList.remove("active");
    }
  }
};

window.addEventListener("scroll", () => {
  menu.style.top = window.scrollY + "px";
});

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

const menuactive = false;

menuButton.addEventListener("click", () => {
  if (menuactive == false) {
    gsap.to(menu, {
      duration: 0.5,
      x: "100%",
      ease: "power3.inOut",
    });
    menuactive = true;
  } else {
    gsap.to(menu, {
      duration: 0.5,
      x: "0%",
      ease: "power3.inOut",
    });
    menuactive = false;
  }
});

menuCross.addEventListener("click", () => {
  gsap.to(menu, {
    duration: 0.5,
    x: "0%",
    ease: "power3.inOut",
  });
});

function removeMenu() {
  gsap.to(menu, {
    duration: 0.5,
    x: "-100%",
    ease: "power3.inOut",
  });
}

document
  .getElementById("contact-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxcs2SRNh6cQspL4agglDWxBHmwAvmzIjMu_xLT3z5k3mk0qM1Rwuaanf4J6o7a1SS7/exec",
        {
          method: "POST",
          body: new URLSearchParams(formObject),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const list = slider.querySelector('.list');
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let currentX = 0;

    // Touch events
    list.addEventListener('touchstart', touchStart);
    list.addEventListener('touchmove', touchMove);
    list.addEventListener('touchend', touchEnd);

  })
