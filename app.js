document.getElementById("year").textContent = new Date().getFullYear();

const postsEl = document.getElementById("posts");
const tabsEl = document.getElementById("site-tabs");
const homeLink = document.getElementById("home-link");

const sorted = [...POSTS].sort((a, b) => new Date(a.date) - new Date(b.date));

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

// Tab strip: "Intro" first, then one tab per year a post is about (from
// its year tag), oldest to newest.
const years = [...new Set(sorted.map(getYearTag).filter(Boolean))]
  .sort((a, b) => a.localeCompare(b));

const introBtn = document.createElement("button");
introBtn.className = "tab-btn";
introBtn.dataset.year = "";
introBtn.textContent = "Intro";
tabsEl.appendChild(introBtn);

for (const year of years) {
  const btn = document.createElement("button");
  btn.className = "tab-btn";
  btn.dataset.year = year;
  btn.textContent = year;
  tabsEl.appendChild(btn);
}

function setActiveTab(year) {
  tabsEl.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.year === year);
  });
}

function renderHome() {
  postsEl.innerHTML = "";
  setActiveTab("");

  const intro = sorted.filter(p => (p.tags || []).includes("intro"));
  for (const post of intro) {
    postsEl.appendChild(renderPost(post));
  }
}

function renderYear(year) {
  postsEl.innerHTML = "";
  setActiveTab(year);

  // Oldest-first within the year, so a multi-part series like
  // "Best Hit Songs of 2023... Part 1/2/3" reads in chronological order.
  for (const post of sorted.filter(p => getYearTag(p) === year)) {
    postsEl.appendChild(renderPost(post));
  }
}

tabsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;
  if (btn.dataset.year === "") {
    renderHome();
  } else {
    renderYear(btn.dataset.year);
  }
});

homeLink.addEventListener("click", renderHome);

renderHome();
