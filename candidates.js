/*
  CANDIDATES — the only file you edit to add or update a candidate.

  To add someone:
    1. Copy the TEMPLATE block below (from the opening { to the closing },).
    2. Paste it inside the square brackets of CANDIDATES.
    3. Paste their answers from the Google Form response sheet, exactly as submitted.
    4. Save, then redeploy the site.

  Rules for pasting text:
    - Keep each answer between the backticks ` `. Apostrophes and quotation marks are fine.
    - If an answer itself contains a backtick (rare), replace it with an apostrophe.
    - Leave photo as "" if there's no photo. Otherwise put the image in the photos/ folder
      and write its file name, e.g. "photos/jane-doe.jpg".
    - affirmation: "filed" once you've confirmed with the Board of Elections, otherwise "pending".
    - sortName: the last name, used for alphabetical order.

  The page sorts candidates alphabetically and shows "No one has declared yet" when this list is empty.
*/

const CANDIDATES = [

  /* ----- TEMPLATE: copy from here ... -----
  {
    name: `Full Name As Voters Should Write It`,
    sortName: `Lastname`,
    photo: "",
    bio: `Up to 500 characters, exactly as submitted.`,
    contact: `Optional public email or social handle`,
    affirmation: "pending",
    answers: [
      `Paste answer 1 here`,  // 1. Top priority for the two-year term
      `Paste answer 2 here`,  // 2. Reaching neighbors who aren't online or don't come to meetings
      `Paste answer 3 here`,  // 3. Escalating an unaddressed 311 request
      `Paste answer 4 here`,  // 4. Community Benefits Agreement for the former UMC site
      `Paste answer 5 here`,  // 5. Traffic safety on Southern Avenue
      `Paste answer 6 here`,  // 6. Neighbor about to lose housing, can't pay for groceries or utilities
      `Paste answer 7 here`,  // 7. Proposed $1,000 community project
    ],
  },
  ----- ... to here ----- */

];
