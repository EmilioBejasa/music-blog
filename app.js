document.getElementById("year").textContent = new Date().getFullYear();

const postsEl = document.getElementById("posts");
const filterBar = document.querySelector(".filter-bar");

const sorted = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

const allTags = [...new Set(sorted.flatMap(p => p.tags || []))].sort();
for (const tag of allTags) {
  const btn = document.createElement("button");
  btn.className = "filter-btn";
  btn.dataset.tag = tag;
  btn.textContent = tag;
  filterBar.appendChild(btn);
}

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function render(activeTag) {
  postsEl.innerHTML = "";

  const visible = activeTag === "all"
    ? sorted
    : sorted.filter(p => (p.tags || []).includes(activeTag));

  if (visible.length === 0) {
    postsEl.innerHTML = '<p class="empty-state">No posts yet.</p>';
    return;
  }

  for (const post of visible) {
    const article = document.createElement("article");
    article.className = "post";

    const tagsHtml = (post.tags || [])
      .map(t => `<span class="post-tag">${t}</span>`)
      .join("");

    const bodyHtml = (post.body || []).join("");

    article.innerHTML = `
      <div class="post-meta">
        <span class="post-date">${formatDate(post.date)}</span>
        <div class="post-tags">${tagsHtml}</div>
      </div>
      <h2 class="post-title">${post.title}</h2>
      <div class="post-body">${bodyHtml}</div>
    `;

    postsEl.appendChild(article);
  }
}

filterBar.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  render(btn.dataset.tag);
});

render("all");
