document.querySelectorAll("[data-include]").forEach(async (element) => {
  const name = element.dataset.include;
  const response = await fetch(`includes/${name}.html`);
  element.innerHTML = await response.text();
});
