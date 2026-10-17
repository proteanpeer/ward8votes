# ward8votes.org: site files

A static three-page site. Every page shares the same header (Home, Run, About ANCs), an "on this page" menu, and "Back to top" links at the end of each section. No build step, no database. Upload the whole folder to Netlify (or any static host).

## What's in the folder

| File | What it is | Do you edit it? |
| --- | --- | --- |
| `index.html` | The main 8E05 page | Yes, once: fill in the `[BRACKETS]` |
| `about-ancs.html` | Full plain-language guide to ANCs | Rarely |
| `declare.html` | Candidate questionnaire page with the embedded Google Form | Yes, once: paste the form link, email, and phone |
| `candidates.js` | The candidate list | Yes, every time a candidate is added or updated |
| `site.js` | Draws the candidate cards and the answer comparison | No |
| `nav.js` | Opens and closes the Menu button on phones | No |
| `styles.css` | All styling, including the print layout | No |
| `photos/` | Candidate photos | Add photos here |
| `qr-ward8votes.png` | QR code that opens https://ward8votes.org, for flyers | No |

## Before launch: fill in the placeholders

Search each HTML file for `[` and replace every placeholder:

- `index.html`: `[Describe the boundaries here...]`, `[YOUR NAME]`, `[EMAIL]` (appears twice), `[DAY]` in the "Last updated" line
- `declare.html`: `[YOUR-FORM-ID]` (appears twice), `[EMAIL]`, `[PHONE]`

Each spot has an `<!-- EDIT: ... -->` comment just above it.

## Adding a candidate

1. Open the Google Form's response spreadsheet.
2. Verify the person by phone or email before listing them.
3. Open `candidates.js` and follow the instructions at the top: copy the template, paste their answers between the backticks, set `affirmation` to `"pending"` or `"filed"`.
4. If they sent a photo, save it in `photos/` (square, about 400x400) and put its path in `photo`.
5. Update the "Last updated" date in `index.html`.
6. Redeploy (drag the folder onto your Netlify site's Deploys page).
7. Open the live site on your phone and check the listing.

The page sorts candidates alphabetically by `sortName` and shows "No one has declared yet" when the list is empty.

## Previewing on your computer

Double-click `index.html` to open it in a browser. Everything works locally except the embedded Google Form.
