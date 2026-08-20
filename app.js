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

// Posts that stay a single flowing page instead of a click-through
// countdown — e.g. a giant honorable-mentions dump where paging through
// 100+ entries one at a time isn't worth it.
const SINGLE_PAGE_TITLES = new Set([
  "The Best Hit Songs of 2023... Part 4",
]);

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
  // becomes a complete entry once it contains an h4. Blocks under an
  // "...Mentions" heading are tagged so consecutive ones can be merged
  // into a single page in place, instead of one page per bonus pick —
  // a numbered entry (a real ranked spot) always ends that tagging, even
  // without a new heading, so the real countdown is never swept in.
  let currentTier = null;
  let inMentions = false;
  const blocks = [];
  let current = [];
  const flush = () => { if (current.length) { current.isMentions = inMentions; blocks.push(current); current = []; } };
  for (const el of [...temp.children]) {
    if (el.tagName === "H3") {
      currentTier = tierClassFor(el.textContent);
      if (currentTier) el.classList.add(currentTier);
      flush();
      inMentions = /mention/i.test(el.textContent);
      current.push(el);
    } else if (el.tagName === "H4") {
      if (currentTier) el.classList.add(currentTier);
      if (current.some(n => n.tagName === "H4")) flush();
      if (/^\d/.test(el.textContent.trim())) inMentions = false;
      current.push(el);
    } else {
      current.push(el);
    }
  }
  flush();

  const appendBlock = (block) => block.forEach(node => bodyEl.appendChild(node));

  if (SINGLE_PAGE_TITLES.has(post.title)) {
    blocks.forEach(appendBlock);
    return article;
  }

  const firstEntryIdx = blocks.findIndex(b => b.some(n => n.tagName === "H4"));
  if (firstEntryIdx === -1) {
    // No song entries (a plain essay-style post) — nothing to hide behind clicks.
    blocks.forEach(appendBlock);
    return article;
  }
  let lastEntryIdx = firstEntryIdx;
  blocks.forEach((b, i) => { if (b.some(n => n.tagName === "H4")) lastEntryIdx = i; });

  const leadingBlocks = blocks.slice(0, firstEntryIdx);
  const rangeBlocks = blocks.slice(firstEntryIdx, lastEntryIdx + 1);
  const trailingBlocks = blocks.slice(lastEntryIdx + 1);

  // Merge adjacent blocks in place — without moving or reordering
  // anything — in two cases: a single ranked spot told across several
  // consecutive h4s (e.g. three versions of the same #4 song), and a
  // run of "...Mentions" bonus picks, which each land on their own page
  // otherwise. Everything else stays exactly where it was written.
  const rankOf = (block) => block.find(n => n.tagName === "H4")?.textContent.match(/^(\d+)[.)]/)?.[1];
  const entryBlocks = [];
  for (const block of rangeBlocks) {
    const prev = entryBlocks[entryBlocks.length - 1];
    const rank = rankOf(block);
    const sameRank = rank && prev && rank === rankOf(prev);
    const bothMentions = block.isMentions && prev && prev.isMentions;
    if (prev && (sameRank || bothMentions)) {
      prev.push(...block);
    } else {
      const copy = [...block];
      copy.isMentions = block.isMentions;
      entryBlocks.push(copy);
    }
  }

  // The ranking's intro (everything before the first song entry) becomes
  // page one of the click-through, rather than being shown all at once.
  // Recommendations (and any other trailing sections) become their own
  // page(s) at the end, after the last song entry.
  const slides = [
    ...(leadingBlocks.length ? [leadingBlocks.flat()] : []),
    ...entryBlocks,
    ...trailingBlocks,
  ];

  if (slides.length > 1) {
    bodyEl.appendChild(buildEntrySlideshow(slides));
  } else {
    slides.forEach(appendBlock);
  }

  return article;
}

// Countdown-style posts (multiple h4 song entries) reveal one page at a
// time with Prev/Next controls — the ranking's intro as page one, one
// song entry per page after that, then recommendations as a final page —
// so scrolling ahead can't spoil the rest of the ranking. Plain posts
// with 0 or 1 entries render inline as usual.
function buildEntrySlideshow(entryBlocks) {
  const wrap = document.createElement("div");
  wrap.className = "entry-slideshow";

  const slide = document.createElement("div");
  slide.className = "entry-slide";

  const nav = document.createElement("div");
  nav.className = "entry-nav";
  nav.innerHTML = `
    <button type="button" class="entry-nav-btn entry-prev">&larr; Prev</button>
    <span class="entry-nav-count">Page <input type="number" class="entry-nav-page-input" min="1"> of <span class="entry-nav-total"></span></span>
    <button type="button" class="entry-nav-btn entry-next">Next &rarr;</button>
  `;

  wrap.appendChild(slide);
  wrap.appendChild(nav);

  const prevBtn = nav.querySelector(".entry-prev");
  const nextBtn = nav.querySelector(".entry-next");
  const pageInput = nav.querySelector(".entry-nav-page-input");

  pageInput.max = entryBlocks.length;
  nav.querySelector(".entry-nav-total").textContent = entryBlocks.length;

  let index = 0;

  function show(i) {
    index = i;
    slide.innerHTML = "";
    entryBlocks[index].forEach(node => slide.appendChild(node));
    pageInput.value = index + 1;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === entryBlocks.length - 1;
  }

  function jumpToInput() {
    const n = Math.min(Math.max(Math.round(Number(pageInput.value)) || 1, 1), entryBlocks.length);
    if (n - 1 !== index) {
      show(n - 1);
      wrap.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      pageInput.value = index + 1;
    }
  }

  prevBtn.addEventListener("click", () => {
    if (index > 0) { show(index - 1); wrap.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
  nextBtn.addEventListener("click", () => {
    if (index < entryBlocks.length - 1) { show(index + 1); wrap.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
  pageInput.addEventListener("change", jumpToInput);
  pageInput.addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); pageInput.blur(); jumpToInput(); }
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

// Builds an "index" list of article titles/dates that link to each
// article's own page (#/post/<slug>), rather than embedding full bodies.
function buildIndexList(posts) {
  const items = posts
    .map(p => `<li><a href="#/post/${slugify(p.title)}" class="article-link"><strong>${p.title}</strong></a> — ${formatDate(p.date)}</li>`)
    .join("");
  return `<ul>${items}</ul>`;
}

// Points the reader at the year tabs, where each year's rankings now
// live as their own index (replacing one giant All Articles list here).
function renderYearNav() {
  const section = document.createElement("section");
  section.className = "post";

  const links = years
    .map(year => `<a href="#" class="year-link" data-year="${year}">${year}</a>`)
    .join(", ");

  section.innerHTML = `
    <h2 class="post-title">Browse by Year</h2>
    <div class="post-body"><p>Every ranking is sorted into its own year tab above — ${links} — oldest to newest.</p></div>
  `;

  return section;
}

// currentYear tracks the active tab ("" = Intro) so the router knows what
// to fall back to once the reader leaves a single-article page.
let currentYear = "";

function renderCurrentTab() {
  if (currentYear) renderYear(currentYear);
  else renderHome();
}

function renderHome() {
  currentYear = "";
  postsEl.innerHTML = "";
  setActiveTab("");

  const intro = sorted.filter(p => (p.tags || []).includes("intro"));
  for (const post of intro) {
    postsEl.appendChild(renderPost(post));
  }
  postsEl.appendChild(renderYearNav());
}

function renderYear(year) {
  currentYear = year;
  postsEl.innerHTML = "";
  setActiveTab(year);

  // Oldest-first within the year, so a multi-part series like
  // "Best Hit Songs of 2023... Part 1/2/3" is listed in chronological order.
  const items = sorted.filter(p => getYearTag(p) === year);
  const section = document.createElement("section");
  section.className = "post";
  section.innerHTML = `
    <h2 class="post-title">${year}</h2>
    <div class="post-body">${buildIndexList(items)}</div>
  `;
  postsEl.appendChild(section);
}

// Each article gets its own page at #/post/<slug>, so it's bookmarkable
// and shareable, and only that one article (with its own click-through
// countdown) is on screen — nothing from other articles to scroll past.
function renderPostPage(slug) {
  const post = sorted.find(p => slugify(p.title) === slug);
  if (!post) { renderCurrentTab(); return; }

  const year = getYearTag(post);
  postsEl.innerHTML = "";
  setActiveTab(year || "");

  const back = document.createElement("button");
  back.type = "button";
  back.className = "back-link";
  back.textContent = year ? `← Back to ${year}` : "← Back";
  back.addEventListener("click", () => {
    currentYear = year || "";
    if (location.hash) location.hash = "";
    else renderCurrentTab();
  });
  postsEl.appendChild(back);
  postsEl.appendChild(renderPost(post));
}

function handleRoute() {
  const match = location.hash.match(/^#\/post\/(.+)$/);
  if (match) renderPostPage(decodeURIComponent(match[1]));
  else renderCurrentTab();
}

window.addEventListener("hashchange", handleRoute);

tabsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;
  currentYear = btn.dataset.year;
  if (location.hash) location.hash = "";
  else renderCurrentTab();
});

homeLink.addEventListener("click", () => {
  currentYear = "";
  if (location.hash) location.hash = "";
  else renderCurrentTab();
});

postsEl.addEventListener("click", (e) => {
  const link = e.target.closest(".year-link");
  if (!link) return;
  e.preventDefault();
  currentYear = link.dataset.year;
  if (location.hash) location.hash = "";
  else renderCurrentTab();
});

const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("visible", window.scrollY > 400);
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

handleRoute();
