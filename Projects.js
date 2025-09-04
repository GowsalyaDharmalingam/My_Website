// Expand/Collapse project details
function toggleDetails(header) {
  const details = header.nextElementSibling;
  details.style.display = (details.style.display === "block") ? "none" : "block";
}

// Filter projects by category
function filterProjects(category) {
  const projects = document.querySelectorAll(".project");
  projects.forEach(project => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
