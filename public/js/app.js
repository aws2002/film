// Scroll To Top
const btn = document.querySelector("#scroll-to-top");

btn.onclick = () => {
  this.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = () => {
  if (window.scrollY >= 50) {
    btn.classList.add("not-active");
  } else btn.classList.remove("not-active");
};