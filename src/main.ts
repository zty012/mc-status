import "./style.css";

function update() {
  document.querySelectorAll("[data-type][data-value]").forEach((el) => {
    const type = el.getAttribute("data-type");
    const value = el.getAttribute("data-value");
    el.textContent = "...";
    if (type === "pingmc") {
      fetch(`https://api.mcsrvstat.us/3/${value}`)
        .then((r) => r.json())
        .then((data) => {
          if (data.online) {
            el.textContent = `✅ ${data.players.online}/${data.players.max}`;
          } else {
            el.textContent = "❌";
          }
        });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  update();
  document.querySelector("#update")?.addEventListener("click", () => {
    update();
  });
});
