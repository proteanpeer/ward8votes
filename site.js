/* Renders the candidate list and the question-by-question comparison from candidates.js.
   You shouldn't need to edit this file unless the questions change. */

const QUESTIONS = [
  "What will be your top priority for your two-year term?",
  "How will you reach neighbors who aren't online or don't come to meetings?",
  "A resident has a problem with a 311 request going unaddressed. How do you escalate their concerns with the relevant city agency?",
  "A developer proposes a large project at the former UMC site that needs Zoning Commission approval. What do you ask for in a Community Benefits Agreement?",
  "Another vehicle collision occurs along Southern Avenue, but neighbors are divided on how to improve traffic safety. How do you work with residents and the city to address the problem?",
  "A neighbor says she's about to lose her housing and can't pay for groceries or utilities. What do you do to help?",
  "The ANC agrees to budget $1,000 to fund a project in our community. What do you propose?",
];

(function () {
  const list = document.getElementById("candidate-list");
  const compareWrap = document.getElementById("compare-wrap");
  const compare = document.getElementById("compare");
  if (!list || typeof CANDIDATES === "undefined" || !Array.isArray(CANDIDATES) || CANDIDATES.length === 0) return;

  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  const key = (c) => String(c.sortName || String(c.name || "").trim().split(/\s+/).pop() || "").toLowerCase();
  const people = CANDIDATES.slice().sort((a, b) =>
    key(a).localeCompare(key(b)) || String(a.name).localeCompare(String(b.name)));

  const statusTag = (c) => c.affirmation === "filed"
    ? '<span class="status filed">Affirmation filed</span>'
    : '<span class="status pending">Affirmation not yet confirmed</span>';

  const contactLine = (c) => {
    const v = String(c.contact || "").trim();
    if (!v) return "";
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return `<p class="contact">Contact: <a href="mailto:${esc(v)}">${esc(v)}</a></p>`;
    if (/^https?:\/\//i.test(v)) return `<p class="contact">Contact: <a href="${esc(v)}" rel="nofollow noopener">${esc(v)}</a></p>`;
    return `<p class="contact">Contact: ${esc(v)}</p>`;
  };

  list.innerHTML = '<div class="candidate-list">' + people.map((c) => `
    <article class="candidate${c.removed ? " is-removed" : ""}" aria-label="${esc(c.name)}">
      ${c.photo ? `<img src="${esc(c.photo)}" alt="Photo of ${esc(c.name)}" width="96" height="96" loading="lazy">` : ""}
      <h3>${esc(c.name)}</h3>
      <p class="write-as">Write in: <b>${esc(c.name)}</b></p>
      ${statusTag(c)}
      ${c.bio ? `<p class="bio">${esc(c.bio)}</p>` : ""}
      ${contactLine(c)}
    </article>`).join("") + "</div>";

  compare.innerHTML = QUESTIONS.map((q, i) => `
    <details>
      <summary>${i + 1}. ${esc(q)}</summary>
      <div class="answers">
        ${people.map((c) => {
          const a = Array.isArray(c.answers) ? String(c.answers[i] || "").trim() : "";
          return `<div class="answer${c.removed ? " is-removed" : ""}"><span class="who">${esc(c.name)}</span><p>${a ? esc(a) : "<em>No answer given.</em>"}</p></div>`;
        }).join("")}
      </div>
    </details>`).join("");
  compareWrap.hidden = false;

  // Open every question before printing so the printed page shows all answers.
  window.addEventListener("beforeprint", () => {
    compare.querySelectorAll("details").forEach((d) => (d.open = true));
  });
})();
