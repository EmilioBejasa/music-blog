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

// Ranking-tier section headers (e.g. "Terrible Tier", "Exceptional+ Tier")
// get a color coded to their level. Matched by keyword since the heading
// text is free-form HTML content, not a fixed enum.
const TIER_KEYWORDS = [
  ["exceptional-", "tier-exceptional-minus"],
  ["exceptional+", "tier-exceptional-plus"],
  ["terrible", "tier-terrible"],
  ["bad", "tier-bad"],
  ["mid", "tier-mid"],
  ["decent", "tier-decent"],
  ["good", "tier-good"],
  ["excellent", "tier-excellent"],
];

function tierClassFor(headingText) {
  const t = headingText.toLowerCase();
  if (!t.includes("tier")) return null;
  for (const [keyword, className] of TIER_KEYWORDS) {
    if (t.includes(keyword)) return className;
  }
  return null;
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

  // Color each tier's h3 heading, then carry that same color onto every
  // h4 song title that follows it, up until the next h3 (tier or not).
  let currentTier = null;
  for (const el of article.querySelector(".post-body").children) {
    if (el.tagName === "H3") {
      currentTier = tierClassFor(el.textContent);
      if (currentTier) el.classList.add(currentTier);
    } else if (el.tagName === "H4" && currentTier) {
      el.classList.add(currentTier);
    }
  }

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

const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("visible", window.scrollY > 400);
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderHome();
