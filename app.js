document.getElementById("year").textContent = new Date().getFullYear();

const postsEl = document.getElementById("posts");
const filterBar = document.querySelector(".filter-bar");

const sorted = [...POSTS].sort((a, b) => {
  const aPinned = (a.tags || []).includes("intro");
  const bPinned = (b.tags || []).includes("intro");
  if (aPinned !== bPinned) return aPinned ? -1 : 1;
  return new Date(b.date) - new Date(a.date);
});

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

function getYearTag(post) {
  return (post.tags || []).find(t => /^\d{4}$/.test(t));
}

function renderPost(post) {
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

  return article;
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

  // Pinned posts (e.g. the intro) render above any year sections.
  const pinned = visible.filter(p => (p.tags || []).includes("intro"));
  const rest = visible.filter(p => !(p.tags || []).includes("intro"));

  for (const post of pinned) {
    postsEl.appendChild(renderPost(post));
  }

  // Group the remaining posts into sections by the year they're about
  // (from the post's year tag), each internally newest-first — so a
  // multi-part series like "Best Hit Songs of 2023... Part 3/2/1" lands
  // in the "2023" section in reverse release-date order.
  const years = [...new Set(rest.map(getYearTag).filter(Boolean))]
    .sort((a, b) => b.localeCompare(a));

  for (const year of years) {
    const heading = document.createElement("h2");
    heading.className = "year-heading";
    heading.textContent = year;
    postsEl.appendChild(heading);

    for (const post of rest.filter(p => getYearTag(p) === year)) {
      postsEl.appendChild(renderPost(post));
    }
  }

  // Posts with no year tag (shouldn't normally happen) still render, at the end.
  const other = rest.filter(p => !getYearTag(p));
  if (other.length) {
    const heading = document.createElement("h2");
    heading.className = "year-heading";
    heading.textContent = "Other";
    postsEl.appendChild(heading);
    for (const post of other) {
      postsEl.appendChild(renderPost(post));
    }
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
