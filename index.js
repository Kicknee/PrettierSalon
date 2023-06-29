document.querySelectorAll(".services-btn").forEach((element) => {
  element.addEventListener("click", (event) => {
    document
      .querySelector(`.modal.${event.target.classList[1]}`)
      .classList.add("active");

    document.body.classList.add("stop-scrolling");

    document
      .querySelector(`.close-btn.${event.target.classList[1]}`)
      .addEventListener("click", () => {
        document
          .querySelector(`.modal.${event.target.classList[1]}`)
          .classList.remove("active");

        document.body.classList.remove("stop-scrolling");
      });
  });
});

window.onclick = (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.classList.remove("active");
    document.body.classList.remove("stop-scrolling");
  }
};

document.querySelector("#curr_date").textContent = new Date().getFullYear();
