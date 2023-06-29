document.querySelectorAll(".uslugi-btn").forEach((element) => {
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

    // document.querySelectorAll(`.modal .info`).forEach((el) => {
    //   el.addEventListener("click", () => {
    //     document
    //       .querySelector(`.modal.${event.target.classList[1]}`)
    //       .classList.remove("active");
    //   });
    // });
  });
});

window.onclick = (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.classList.remove("active");
    document.body.classList.remove("stop-scrolling");
  }
};

document.querySelector("#curr_date").textContent = new Date().getFullYear();
