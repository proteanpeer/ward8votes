/* Opens and closes the main menu on small screens. */
(function () {
  var header = document.querySelector(".site-header");
  var button = document.querySelector(".menu-toggle");
  var menu = document.getElementById("site-menu");
  if (!header || !button || !menu) return;

  function setOpen(open) {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    header.classList.toggle("menu-open", open);
  }
  function isOpen() { return button.getAttribute("aria-expanded") === "true"; }

  button.addEventListener("click", function () { setOpen(!isOpen()); });

  // Close with Escape, by tapping outside, or after choosing a link.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) { setOpen(false); button.focus(); }
  });
  document.addEventListener("click", function (e) {
    if (isOpen() && !header.contains(e.target)) setOpen(false);
  });
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  // Reset if the screen is widened past the breakpoint.
  var wide = window.matchMedia("(min-width: 44rem)");
  var reset = function () { if (wide.matches) setOpen(false); };
  if (wide.addEventListener) wide.addEventListener("change", reset); else wide.addListener(reset);
})();
