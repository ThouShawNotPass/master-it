var isDarkMode = false;

function switchTheme() {

     var logo = document.getElementById("myLogo");
     var navBar = document.getElementById("myNavBar");
     var themeModeIcon = document.getElementById("toggle-theme");

     // Toggle Theme
     if (isDarkMode) { // TO LIGHT MODE
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          themeModeIcon.classList.toggle("fa-sun");
          themeModeIcon.classList.toggle("fa-moon");
          logo.src = "img/master-it-light.png";
     }
     else { // TO DARK MODE
          document.documentElement.setAttribute("data-theme", "dark");
          localStorage.setItem('theme', 'light');
          themeModeIcon.classList.toggle("fa-sun");
          themeModeIcon.classList.toggle("fa-moon");
          logo.src = "img/master-it-dark.png";
     }
     isDarkMode = !isDarkMode;

     // Toggle the rest of the themes
     javaEditor.setOption("theme", isDarkMode ? "dracula" : "3024-day"); // Java editor
}