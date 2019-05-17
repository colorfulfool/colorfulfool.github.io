document.addEventListener("click", () => {
  if (event.target.matches(".hire__option [href]"))
    gtag("event", "click", {
      "event_category" : "Hire",
      "event_label" : event.target.textContent
    })
})