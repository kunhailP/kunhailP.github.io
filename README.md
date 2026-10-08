# kunhailP.github.io

Personal academic website of Kunwoo Park (Political Science and International Relations, Kookmin University).

Plain HTML/CSS/JS — no build step, no framework, no external dependencies.

## Structure

```
.
├── index.html            Home: intro, education, selected research, selected honors
├── research.html         Research interests, research experience, skills
├── papers.html           Papers grouped by status
├── data/
│   └── site-data.js      ALL editable content (bio, papers, experience, honors, skills, links)
├── assets/
│   ├── css/style.css     Styles (light + dark mode)
│   ├── fonts/            Lato web fonts (self-hosted)
│   ├── js/site-shell.js  Shared header navigation and footer
│   ├── js/main.js        Renders site-data.js into the pages
│   ├── js/utils.js       Dark-mode toggle
│   ├── images/           Favicon and profile photo
│   └── files/            Kunwoo_Park_CV.pdf
├── robots.txt, sitemap.xml, .nojekyll
└── README.md
```

## Updating content

Almost everything lives in **`data/site-data.js`**. Empty strings (`""`) are never shown on the site, so leave a field empty until the information is confirmed. `TODO` comments stay in that file and are not shown on the site.

- **Papers**: edit the `papers` array. Set `status` to one of `conditionally-accepted`, `under-review`, `working-paper`, `in-progress`; the Papers page groups entries by these. Update `status` only when it has actually changed.
- **Paper links**: fill in `links: { paper, code, data, replication }`. A button is shown only when its URL is not empty.
- **Home-page "Selected Research"**: set `selected: true` on a paper (keep it to about 3) and list its title in `selectedOrder`. The `description` sentence appears only there.
- **Research experience / honors / skills / education**: edit the matching arrays.
- **Links**: `SITE.links` (email, GitHub, CV path, Google Scholar). Google Scholar shows up on the home page once `scholar` is filled in.
- **Bio / tagline**: `SITE.bio` and `SITE.tagline`. The name, tagline, and affiliation are also written directly into `index.html` so they display even without JavaScript and for search engines; update both places.

### Profile photo

Put a roughly square photo (e.g. 400×400 px or larger, JPG/PNG) at `assets/images/profile.jpg` and set
`photo: "assets/images/profile.jpg"` in `SITE` (in `data/site-data.js`). Leave it as `""` to show no photo.
The photo is shown at 160×160 px to the right of the intro on desktop and above the name on mobile.

### CV

Put the PDF at **`assets/files/Kunwoo_Park_CV.pdf`**. To update it later, replace that file under the same name. The header "CV" link and the home-page CV link both point to it and open in a new tab.

### Navigation

Nav items are in `NAV_ITEMS` at the top of `assets/js/site-shell.js`. To add a page, copy `research.html`, change its content, and add an entry there.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploying to GitHub Pages

1. Create a public repository named **`kunhailP.github.io`** on GitHub (account `kunhailP`).
2. Push this folder:
   ```bash
   git remote add origin https://github.com/kunhailP/kunhailP.github.io.git
   git add -A && git commit -m "Initial site"
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, Branch: `main`, folder `/ (root)`.
4. The site goes live at `https://kunhailp.github.io/` within a few minutes. Each later push redeploys it.

All internal links are relative, so the site also works from a project repository (e.g. `username.github.io/homepage/`). If you use a different URL, update `canonical`/`og:url` in the three HTML files plus `robots.txt` and `sitemap.xml`.

## Credits

The visual style (Lato, blue/orange link colors, navigation, section headings, footer), the shared-shell approach, and dark mode are adapted from the
[Academic Homepage Template](https://github.com/Arvid-pku/Academic-Homepage-Template) by Xunjian Yin
("Free to use for personal and academic homepages. Attribution appreciated but not required.").
The footer credits the template. Lato is by Łukasz Dziedzic, licensed under the SIL Open Font License 1.1.
