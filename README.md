# Maryhenrietta Ezeobi — portfolio

A complete static HTML, CSS and JavaScript portfolio. No build step, backend, API key, analytics or third-party font dependency.

## Open locally

Open `index.html` directly, or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository and upload the **contents** of this folder to its root.
2. In Settings → Pages, select “Deploy from a branch”, the `main` branch and `/ (root)`.
3. Open the generated Pages address. Relative links support both project repositories and user sites.
4. For a custom domain, add it in Pages settings, configure the DNS records specified by GitHub, and enable HTTPS once available. Add a `CNAME` file only after selecting the real domain.

## Edit

- `index.html`: homepage and project previews.
- `projects/*.html`: seven separate project pages.
- `cv.html`: concise, printable portfolio CV. Use “Print / Save as PDF” for a PDF copy.
- `styles.css`: responsive layout, colours and typography.
- `main.js`: process tabs, evidence selection, accessible image enlargement, printing.
- `assets/`: supplied evidence, optimised WebP images, exact diagrams and sample dashboard data.
- `ASSET-SOURCES.json`: original evidence filenames and transformation notes.

## Evidence and publication notes

SAP and Odoo are academic/hands-on course projects. SAP credential is course completion, not SAP vendor professional certification. AI is a seven-participant research prototype. Magirus is professional internship work: script, direction and production with a marketing agency; editing is not attributed to Maryhenrietta. The Magirus cover is related published content, not a video still. The video opens on LinkedIn and may require sign-in.

The reporting dashboard is explicitly reconstructed. Unique attendees and repeated attendances are recomputed separately from records matching the sample employee master. The 775 attended records with unmatched IDs are excluded. Its numbers are not actual Chevron KPIs. The original inconsistent workbook is not distributed. The HiveMode adoption plan is fictional. SEO screenshots demonstrate a prototype, without unverified speed or SEO performance claims.

The CV edition removes conflicting performance percentages, DAM rollout claims and unsupported tool proficiency claims from the supplied CV versions. Planned graduation is winter semester 2026/27. Review employment titles/contact details before public publishing. No phone number, address, raw research logs, credentials or private internship certificate are included.

## Accessibility and performance

Semantic HTML, visible keyboard focus, skip navigation, reduced-motion support, keyboard process tabs, modal escape/close and descriptive screenshot text. Text and links work without JavaScript. On the SAP case, each process’s opening screenshot stays visible without JavaScript; JavaScript enables step selection and tabs. Images use lazy loading except primary previews. Screenshots retain their original colours. Use image enlargement for detailed evidence reading.

## Validation

Checked all nine pages at 320, 390, 768 and 1440 pixel viewport widths, including image decoding and horizontal overflow. SAP process tabs, evidence steps, keyboard tab selection, image dialogs, Escape/close, gallery enlargement, reduced motion and no-JavaScript evidence fallback passed in headless Chromium. External LinkedIn content availability is not controlled by this site.

## Content editor

Open `editor.html` from the extracted website folder. Choose a page, edit text, replace images, or update links. The right-hand preview updates as you work; drafts are saved in that browser. Export `content.js` and replace the file of the same name in the website folder. Upload the updated file to GitHub to publish those edits. The editor does not perform account login or publish automatically. Keep `editor.html` local if you do not want it uploaded; it has no public navigation link and cannot write to a deployed site.

Send the latest exported `content.js` back to me when requesting further design changes so your edits can be preserved. Adding or deleting projects and changing layout remain code changes; the editor covers existing text, images and contact links.

## Revision 2

More green and white; distinct project compositions. Magirus now covers campaign creation, photography, filming, editing and EN/DE/FR content across Germany, Austria and France. Its change video is a separate item, with the agency collaboration and editing exclusion retained. The thesis case uses the supplied latest document: mean quality 2.96 to 4.14/5; SUS 76.43/100; willingness to use 3.95 to 4.81/5; mean reply time 2.40 to 1.64 minutes. The exact time test is p=.297, so that reduction is descriptive; willingness increased with exact p=.016. The study sample is seven. DAM rollout claims remain excluded pending clarification of the contradictory earlier account.
