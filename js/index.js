let root = document.querySelector(":root");
let lightModeIcon = document.querySelector(
  "#header .container .nav-icons .light-mode-icon i"
);
let darkModeIcon = document.querySelector(
  "#header .container .nav-icons .dark-mode-icon i"
);

let barsIcon = document.querySelector(
  "#header .container .nav-icons .bars-icon i"
);

let resMenu = document.querySelector(".responsive-overlay");

let xIcon = document.querySelector(".responsive-overlay .responsive-menu ul i");

let logo = document.querySelector("#header .container .logo ");

let header = document.querySelector("#header");

let resMenuLinks = document.querySelectorAll(
  ".responsive-overlay .responsive-menu ul li a"
);

darkModeIcon.addEventListener("click", () => {
  root.style.setProperty("--spans-color", "hsl(35, 72%, 44%)");
  root.style.setProperty("--white", "#fff");
  root.style.setProperty("--light-section", "rgb(37, 37, 37)");
  root.style.setProperty("--dark-section", "rgb(32, 32, 32)");
  root.style.setProperty("--header-background-color", "rgb(23, 23, 23)");
  root.style.setProperty("--paragraph-color", "#9f9f9f");
  root.style.setProperty("--color-light", "hsl(0, 0%, 9%)");
  root.style.setProperty("--buttons-background", "rgb(215, 140, 35)");
  root.style.setProperty("--buttons-hover-background", "rgb(237, 159, 48)");
  root.style.setProperty("--button-color", " rgb(23, 23, 23)");
  root.style.setProperty("--info-box-background", " rgb(23, 23, 23)");
  root.style.setProperty("--info-h3-color", " rgb(173, 173, 173)");
  root.style.setProperty("--overlay-color", "rgba(0, 0, 0, 0.56)");
  lightModeIcon.style.display = "block";
  darkModeIcon.style.display = "none";
});

lightModeIcon.addEventListener("click", () => {
  root.style.setProperty("--spans-color", " rgb(206, 18, 18)");
  root.style.setProperty("--white", "#000");
  root.style.setProperty("--light-section", "#eee");
  root.style.setProperty("--dark-section", "#fff");
  root.style.setProperty("--header-background-color", "#fff");
  root.style.setProperty("--paragraph-color", "rgb(79, 79, 90)");
  root.style.setProperty("--color-light", "#fff");
  root.style.setProperty("--buttons-background", "#e61414");
  root.style.setProperty("--buttons-hover-background", "#ff2f2f");
  root.style.setProperty("--button-color", " #fff");
  root.style.setProperty("--info-box-background", "#f5f5f5");
  root.style.setProperty("--info-h3-color", "  rgb(125, 125, 125)");
  root.style.setProperty("--overlay-color", "rgba(255, 255, 255, 0.56)");

  darkModeIcon.style.display = "block";
  lightModeIcon.style.display = "none";
});

barsIcon.addEventListener("click", () => {
  resMenu.style.display = "flex";
  header.style.display = "none";
});

xIcon.addEventListener("click", () => {
  resMenu.style.display = "none";
  header.style.display = "block";
});

resMenuLinks.forEach((ele) => {
  ele.addEventListener("click", () => {
    resMenu.style.display = "none";
  });
});
