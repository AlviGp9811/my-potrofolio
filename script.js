document.addEventListener("DOMContentLoaded", () => {
  fetch("projects.json")
    .then(response => response.json())
    .then(projects => {
      const container = document.getElementById("projectsContainer");

      projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
          <img src="${project.image}" alt="${project.title}" class="project-image" />
          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Lihat Proyek</a>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Gagal memuat proyek:", error);
    });
});
