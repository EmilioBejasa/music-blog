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

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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
  article.id = `post-${slugify(post.title)}`;

  const bodyHtml = (post.body || []).join("");

  article.innerHTML = `
    <div class="post-meta">
      <span class="post-date">${formatDate(post.date)}</span>
    </div>
    <h2 class="post-title">${post.title}</h2>
    <div class="post-body"></div>
  `;

  const bodyEl = article.querySelector(".post-body");
  const temp = document.createElement("div");
  temp.innerHTML = bodyHtml;

  // Split the body into blocks, breaking right before each h3 (tier
  // header) and each h4 (song entry) — while also carrying each tier's
  // color onto its h3 and every h4 that follows, up until the next h3.
  // A tier header with no h4 yet folds into the entry it precedes
  // (that's the "intro" line for the upcoming song); a block only
  // becomes a complete entry once it contains an h4.
  let currentTier = null;
  const blocks = [];
  let current = [];
  for (const el of [...temp.children]) {
    if (el.tagName === "H3") {
      currentTier = tierClassFor(el.textContent);
      if (currentTier) el.classList.add(currentTier);
      if (current.length) { blocks.push(current); current = []; }
      current.push(el);
    } else if (el.tagName === "H4") {
      if (currentTier) el.classList.add(currentTier);
      if (current.some(n => n.tagName === "H4")) { blocks.push(current); current = []; }
      current.push(el);
    } else {
      current.push(el);
    }
  }
  if (current.length) blocks.push(current);

  const appendBlock = (block) => block.forEach(node => bodyEl.appendChild(node));

  const firstEntryIdx = blocks.findIndex(b => b.some(n => n.tagName === "H4"));
  if (firstEntryIdx === -1) {
    // No song entries (a plain essay-style post) — nothing to hide behind clicks.
    blocks.forEach(appendBlock);
    return article;
  }
  let lastEntryIdx = firstEntryIdx;
  blocks.forEach((b, i) => { if (b.some(n => n.tagName === "H4")) lastEntryIdx = i; });

  blocks.slice(0, firstEntryIdx).forEach(appendBlock);

  const entryBlocks = blocks.slice(firstEntryIdx, lastEntryIdx + 1);
  if (entryBlocks.length > 1) {
    bodyEl.appendChild(buildEntrySlideshow(entryBlocks));
  } else {
    entryBlocks.forEach(appendBlock);
  }

  blocks.slice(lastEntryIdx + 1).forEach(appendBlock);

  return article;
}

// Countdown-style posts (multiple h4 song entries) reveal one entry at a
// time with Prev/Next controls, so scrolling ahead can't spoil the rest
// of the ranking. Plain posts with 0 or 1 entries render inline as usual.
function buildEntrySlideshow(entryBlocks) {
  const wrap = document.createElement("div");
  wrap.className = "entry-slideshow";

  const slide = document.createElement("div");
  slide.className = "entry-slide";

  const nav = document.createElement("div");
  nav.className = "entry-nav";
  nav.innerHTML = `
    <button type="button" class="entry-nav-btn entry-prev">&larr; Prev</button>
    <span class="entry-nav-count"></span>
    <button type="button" class="entry-nav-btn entry-next">Next &rarr;</button>
  `;

  wrap.appendChild(slide);
  wrap.appendChild(nav);

  const prevBtn = nav.querySelector(".entry-prev");
  const nextBtn = nav.querySelector(".entry-next");
  const countEl = nav.querySelector(".entry-nav-count");

  let index = 0;

  function show(i) {
    index = i;
    slide.innerHTML = "";
    entryBlocks[index].forEach(node => slide.appendChild(node));
    countEl.textContent = `${index + 1} / ${entryBlocks.length}`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === entryBlocks.length - 1;
  }

  prevBtn.addEventListener("click", () => {
    if (index > 0) { show(index - 1); wrap.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
  nextBtn.addEventListener("click", () => {
    if (index < entryBlocks.length - 1) { show(index + 1); wrap.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });

  show(0);

  return wrap;
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

function renderArticleIndex() {
  const section = document.createElement("section");
  section.className = "post";

  const items = sorted
    .filter(p => !(p.tags || []).includes("intro"))
    .map(p => {
      const year = getYearTag(p);
      const targetId = `post-${slugify(p.title)}`;
      return `<li><a href="#" class="article-link" data-year="${year}" data-target="${targetId}"><strong>${p.title}</strong></a> — ${formatDate(p.date)}</li>`;
    })
    .join("");

  section.innerHTML = `
    <h2 class="post-title">All Articles</h2>
    <div class="post-body"><ul>${items}</ul></div>
  `;

  return section;
}

function renderHome() {
  postsEl.innerHTML = "";
  setActiveTab("");

  const intro = sorted.filter(p => (p.tags || []).includes("intro"));
  for (const post of intro) {
    postsEl.appendChild(renderPost(post));
  }
  postsEl.appendChild(renderArticleIndex());
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

postsEl.addEventListener("click", (e) => {
  const link = e.target.closest(".article-link");
  if (!link) return;
  e.preventDefault();
  renderYear(link.dataset.year);
  document.getElementById(link.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
});

const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("visible", window.scrollY > 400);
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderHome();
