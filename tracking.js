document.addEventListener("click", () => {
  if (event.target.matches(".hire__option [href]"))
    ga("send", "event", "Hire", "click", event.target.textContent)
})