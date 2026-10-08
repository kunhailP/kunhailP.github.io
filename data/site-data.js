/**
 * SITE DATA — the single place to edit academic content.
 *
 * Rules used throughout this file:
 *   - Empty strings ("") and null are NOT rendered on the public site.
 *     Use them for anything that is missing or not yet verified.
 *   - Lines marked "TODO" need information that has not been confirmed yet.
 *     TODO notes live only in this file; they are never shown on the website.
 *   - Only add a URL when it really exists. A link button appears only when
 *     its URL is non-empty.
 */

const SITE = {
  name: "Kunwoo Park",
  tagline: "Political Methodology · NLP · Causal Inference",
  affiliation: [
    "Department of Political Science and International Relations",
    "Kookmin University, Seoul, Korea"
  ],

  // Short bio shown on the home page (approx. 70–100 words).
  bio: [
    "I am an undergraduate researcher in Political Science and International Relations at Kookmin University, " +
    "with a second major in AI, Big Data and Management and a minor in Economics. " +
    "My research interests lie in political methodology, political behavior, and political economy. " +
    "Methodologically, I am interested in statistical inference and partial identification, " +
    "computational text analysis, and measurement with large language models. " +
    "Substantively, I study political accountability, blame attribution, welfare politics, and deservingness."
  ],

  // Profile photo, e.g. "assets/images/profile.jpg". "" = no photo is shown.
  photo: "assets/images/profile.jpg",

  links: {
    email: "pkw6094@kookmin.ac.kr",
    github: "https://github.com/kunhailP",
    cv: "assets/files/Kunwoo_Park_CV.pdf",  // Replace the PDF at this path to update the CV.
    scholar: ""                              // TODO: add Google Scholar profile URL when available.
  }
};

/* ---------------------------------------------------------------------------
 * EDUCATION (GPA intentionally omitted)
 * ------------------------------------------------------------------------- */
const education = [
  {
    degree: "B.A. in Political Science and International Relations",
    institution: "Kookmin University",
    period: "Expected 2027",
    details: [
      "Second Major: AI, Big Data and Management",
      "Minor: Economics"
    ]
  }
];

/* ---------------------------------------------------------------------------
 * RESEARCH INTERESTS (Research page)
 * ------------------------------------------------------------------------- */
const researchThemes = [
  {
    title: "Political Methodology",
    text: "Statistical inference, partial identification, and measurement. " +
          "I am interested in how to quantify uncertainty and draw credible inferences " +
          "when politically meaningful quantities are imperfectly observed."
  },
  {
    title: "Computational Political Science",
    text: "Text as data, natural language processing, and measurement with large language models. " +
          "A recurring question is how predictive performance relates to valid substantive inference."
  },
  {
    title: "Political Behavior & Political Economy",
    text: "Political accountability, blame attribution, welfare politics, and deservingness, " +
          "along with related questions in political behavior."
  }
];

/* ---------------------------------------------------------------------------
 * PAPERS
 *
 * status must be one of:
 *   "conditionally-accepted" | "under-review" | "working-paper" | "in-progress"
 * Do not change a status until it has actually changed.
 *
 * Fields:
 *   title        (required)
 *   authors      "" = not shown. TODO: add co-authors if any.
 *   venue        "" = not shown. Only fill in when confirmed.
 *   note         short extra note, e.g. "In Korean."
 *   description  one sentence, used for home-page "Selected Research".
 *   selected     true = shown on the home page (keep it to ~3 items).
 *   links        { paper, code, data, replication } — only non-empty URLs render.
 * ------------------------------------------------------------------------- */
const papers = [
  {
    title: "Temporal Duality of the Reasonable Commander Standard under International Humanitarian Law: The Case of the AI Targeting System Lavender",
    authors: "",
    venue: "Humanitarian Law Review",
    status: "conditionally-accepted",
    note: "In Korean.",
    description: "",
    selected: false,
    // Profile photo, e.g. "assets/images/profile.jpg". "" = no photo is shown.
  photo: "assets/images/profile.jpg",

  links: { paper: "", code: "", data: "", replication: "" }
  },
  {
    title: "The Exploration Cost of Learning Boundary and Population Causal Effects",
    authors: "",
    venue: "",  // Do not add a journal name unless confirmed.
    status: "under-review",
    note: "",
    // TODO: replace with your own one-sentence summary (no findings claimed here).
    description: "Studies the cost of exploration when the goal is to learn boundary and population causal effects.",
    selected: true,
    // Profile photo, e.g. "assets/images/profile.jpg". "" = no photo is shown.
  photo: "assets/images/profile.jpg",

  links: { paper: "", code: "", data: "", replication: "" }
  },
  {
    title: "Asymmetric Enforcement and Take-Up Frictions in Korea’s Basic Pension",
    authors: "",
    venue: "",
    status: "working-paper",
    note: "",
    // TODO: replace with your own one-sentence summary (no findings claimed here).
    description: "Examines asymmetric enforcement and take-up frictions in Korea’s Basic Pension.",
    selected: true,
    // Profile photo, e.g. "assets/images/profile.jpg". "" = no photo is shown.
  photo: "assets/images/profile.jpg",

  links: { paper: "", code: "", data: "", replication: "" }
  },
  {
    title: "Can We Compare Parties Measured by Language Models?",
    authors: "",
    venue: "",
    status: "working-paper",
    note: "",
    // TODO: replace with your own one-sentence summary (no findings claimed here).
    description: "Asks whether party measures produced by language models can be meaningfully compared.",
    selected: true,
    // Profile photo, e.g. "assets/images/profile.jpg". "" = no photo is shown.
  photo: "assets/images/profile.jpg",

  links: { paper: "", code: "", data: "", replication: "" }
  },
  {
    title: "Latent Coverage from Noisy Calibration",
    authors: "",
    venue: "",
    status: "working-paper",
    note: "",
    description: "",
    selected: false,
    // Profile photo, e.g. "assets/images/profile.jpg". "" = no photo is shown.
  photo: "assets/images/profile.jpg",

  links: { paper: "", code: "", data: "", replication: "" }
  },
  {
    title: "After Judgment: Leader–Party Attachments and the Reallocation of Political Blame",
    authors: "",
    venue: "",
    status: "in-progress",
    note: "",
    description: "",
    selected: false,
    // Profile photo, e.g. "assets/images/profile.jpg". "" = no photo is shown.
  photo: "assets/images/profile.jpg",

  links: { paper: "", code: "", data: "", replication: "" }
  },
  {
    title: "Votes Without Neighborhoods: Partial Identification of Neighborhood-Level Voting under Absentee Aggregation",
    authors: "",
    venue: "",
    status: "in-progress",
    note: "",
    description: "",
    selected: false,
    // Profile photo, e.g. "assets/images/profile.jpg". "" = no photo is shown.
  photo: "assets/images/profile.jpg",

  links: { paper: "", code: "", data: "", replication: "" }
  },
  {
    title: "When Texts Are Not Independent: Robust Inference under Semantic Dependence",
    authors: "",
    venue: "",
    status: "in-progress",
    note: "",
    description: "",
    selected: false,
    // Profile photo, e.g. "assets/images/profile.jpg". "" = no photo is shown.
  photo: "assets/images/profile.jpg",

  links: { paper: "", code: "", data: "", replication: "" }
  }
];

// Display order and labels for paper statuses.
const paperStatuses = [
  { key: "conditionally-accepted", heading: "Conditionally Accepted", label: "Conditionally accepted" },
  { key: "under-review",           heading: "Under Review",           label: "Under review" },
  { key: "working-paper",          heading: "Working Papers",         label: "Working paper" },
  { key: "in-progress",            heading: "Research in Progress",   label: "In progress" }
];

// Order of papers in the home-page "Selected Research" list (matched by title).
const selectedOrder = [
  "The Exploration Cost of Learning Boundary and Population Causal Effects",
  "Can We Compare Parties Measured by Language Models?",
  "Asymmetric Enforcement and Take-Up Frictions in Korea’s Basic Pension"
];

/* ---------------------------------------------------------------------------
 * RESEARCH EXPERIENCE
 * Fields left as "" are not displayed.
 * ------------------------------------------------------------------------- */
const researchExperience = [
  {
    role: "Undergraduate Researcher",
    unit: "Artificial Intelligence & Business Analytics Laboratory",
    institution: "Kookmin University",
    supervisor: "Prof. Jehyuk Lee",
    period: "2026–",
    project: "",
    description: "Built and validated an automated measure of responsibility attribution in Korean political YouTube comments during a summer undergraduate research internship."
  },
  {
    role: "Research Assistant",
    unit: "Social Science Korea (SSK) Project",
    institution: "National Research Foundation of Korea",
    supervisor: "",  // TODO: add Principal Investigator (verify before adding). Shown as "PI: ..." if filled.
    period: "2026–",
    // TODO: verify the official English project title.
    project: "Algorithms of Antipathy: A Data-Driven Analysis of Political Conflict in Korea",
    description: ""
  }
];

/* ---------------------------------------------------------------------------
 * SELECTED HONORS (keep short; full list belongs in the CV)
 * ------------------------------------------------------------------------- */
const honors = [
  { year: "2026", title: "Minister of Foreign Affairs Award", detail: "Public Data and AI Competition, Ministry of Foreign Affairs" },
  { year: "2026", title: "Minister of Gender Equality and Family Award", detail: "AI and Data Convergence Idea and Analysis Competition, Ministry of Gender Equality and Family" },
  { year: "2026", title: "10th Place", detail: "Poverty Prediction Challenge, World Bank and DrivenData (1,322 registered participants)" },
  { year: "2026", title: "Second Place", detail: "DACON Smart Warehouse Delay Prediction AI Competition (607 teams)" },
  { year: "2025", title: "Second Prize", detail: "KOSSDA Undergraduate Data Visualization Competition" }
];

/* ---------------------------------------------------------------------------
 * SKILLS
 * ------------------------------------------------------------------------- */
const skills = [
  { label: "Programming", value: "Python, R" },
  { label: "Libraries",   value: "PyTorch, Hugging Face Transformers, scikit-learn" },
  { label: "Tools",       value: "Git, LaTeX" },
  { label: "Languages",   value: "Korean (native), English" }
];
