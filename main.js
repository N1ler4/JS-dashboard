"use strict";

let navMenu = $(".nav-menu"),
  changeAsideMenu = $(".aside-none"),
  asideMenu = $(".asideMenu"),
  logOut = $(".logout"),
  logOutNone = $(".logout-none");

asideMenu.addEventListener("click", () =>
  changeAsideMenu.classList.toggle("aside-none")
);
logOut.addEventListener("click", () =>
  logOutNone.classList.toggle("logout-none")
);

function renderNavigationMenu(data) {
  data.forEach((item) => {
    const listItems = createElement(
      "li",
      classListItem,
      `
            <a href="${item.link}"><i class="${item.icon}"></i> <span class="">${item.title}</span></a>
            `
    );
    navMenu.appendChild(listItems);
  });
}
renderNavigationMenu(navigation);

(function () {
  let token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/pages/login.html";
  }
})();
function logOutFinal() {
    localStorage.removeItem('token');
    window.location.href = "/pages/login.html";
  }
  