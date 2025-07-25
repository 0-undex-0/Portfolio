const projectLinks = {
  "project-1": "https://moonux.cloud",
  "project-2": "https://moonux.cloud",
  "project-3": "https://fishbot.eqwzzx.fun",
};

Object.entries(projectLinks).forEach(([id, url]) => {
  const element = document.getElementById(id);
  if (element) { element.addEventListener("click", () => { window.open(url, "_blank");}); }
});
