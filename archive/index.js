const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

let darkMode = darkModeMediaQuery.matches;

darkModeMediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    darkMode = true;
  } else {
    darkMode = false;
  }
});

function drawBuildings() {
  state.buildings.forEach((building) => {
    ctx.fillStyle = darkMode ? "#254D7E" : "#947285";
    ctx.fillRect(building.x, 0, building.width, building.height);
  });
}

const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");


// Set dark-mode class on body if darkMode is true and pick icon
if (darkMode) {
  document.body.classList.add("dark-mode");
  darkIcon.setAttribute("display", "none");
} else {
  lightIcon.setAttribute("display", "none");
}

function toggleDarkMode() {
    // Toggle darkMode variable
    darkMode = !darkMode;
  
    // Toggle dark-mode class on body
    document.body.classList.toggle("dark-mode");
  
    // Toggle light and dark icons
    if (darkMode) {
      lightIcon.setAttribute("display", "block");
      darkIcon.setAttribute("display", "none");
    } else {
      lightIcon.setAttribute("display", "none");
      darkIcon.setAttribute("display", "block");
    }
  }