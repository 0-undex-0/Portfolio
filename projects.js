const projectLinks = {
  "project-1": "https://moonux.cloud",
  "project-2": "https://moonux.cloud",
};

Object.entries(projectLinks).forEach(([id, url]) => {
  const element = document.getElementById(id);
  if (element) { element.addEventListener("click", () => { window.open(url, "_blank");}); }
});