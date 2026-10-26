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

  {
    name: `James Earle`,
    sortName: `Earle`,
    photo: "",
    bio: `I have lived here in Ward 8 for nearly 12 years, and I have 12+ years of experience in community organizing and communications. I have worked with folks from all kinds of backgrounds and perspectives--including our ANCs--and I find great joy in bringing people together to talk about important issues. I'm friendly, I’m honest, and I like to solve problems with my neighbors, who insisted I run for this seat. I'm also a husband to a wonderful wife and a dad to a beautiful baby, plus a dog and cat.`,
    contact: `jamesearle.net/contact`,
    affirmation: "pending",
    answers: [
      `My top priority would be to document and share everything about the work and responsibilities of an ANC so that our community better understands what the job is like and how they can more effectively engage with their most local level of government. Every two years, either nobody runs or one person runs unopposed. If I can help demystify what's going on in our ANC, I think it will get easier for more of us to participate in--and lead--this kind of work in our neighborhoods.`,  // 1. Top priority for the two-year term
      `Our SMD has ~400 single-family homes and a few medium-sized apartment buildings; I will regularly visit every single one of them throughout the year. In my experience, there's no substitute for knocking on doors and making personal connections with neighbors. And once you meet a few people, it's easier to build trust, connect with more neighbors, and get more done. Hitting the streets and talking to each other in person is just fundamental to seeing problems and organizing around solutions.`,  // 2. Reaching neighbors who aren't online or don't come to meetings
      `Two things: (1) we write a killer email to the relevant agency officials and don't let a day go by without following up with them and their managers, and (2) we connect with other commissioners and residents to investigate whether this is a systemic issue that the ANC as a whole should act on. Note: we're not going to be argumentative, impatient, or threatening. Instead, we're positive, patient, and persistent. We want a win-win with the city, and we're gonna be RELENTLESS about getting it.`,  // 3. Escalating an unaddressed 311 request
      `Private sector property development with no requirements to invest in local people and public accessibility always leads to community displacement. To ensure we’d benefit from development long-term, I would prioritize: (1) hiring Ward 8 residents both for construction *and* as employees of the business(es) there; and (2) people- and eco-friendly infrastructure (instead of car-centric), including green space, pedestrian and bicycle access, and community space like at THEARC.`,  // 4. Community Benefits Agreement for the former UMC site
      `With any road or intersection I’d start by working with residents to collect data and better understand the problem. How often do cars run the red light/stop sign or speed? How many residents feel unsafe driving or walking there, and why? We write a compelling report that’s precise and specific about the problem so DDOT has a harder time explaining any inaction. If we want to get spicy, we can also experiment with temporary safety markers (e.g. cones, spraypaint) without waiting for the city.`,  // 5. Traffic safety on Southern Avenue
      `ANC training includes learning about all the public and charitable resources available to residents, so I’d connect this person with the most relevant ones ASAP. (I will have a lot of studying to do as a new ANC.) I do know Martha’s Table could help with food right away, but I’d also see if she’s okay asking her neighbors for assistance, too. When we have a community, we never have to solve most problems alone. And if I can help build bridges between neighbors, we’ll all be richer.`,  // 6. Neighbor about to lose housing, can't pay for groceries or utilities
      `I’d fund a kind of “Street Steward” pilot program (perhaps with Ward 8 Woods) and pay a resident to pick up trash in their neighborhood every month. At a wage of ~$20/hr, $1000 could cover 24 cleanups--enough for a year-long pilot in *two* neighborhoods in our SMD, and success could build support for a permanent program. More than clean streets, though, this is about supporting people getting out in their neighborhood to work together and solve problems. That's how we strengthen our community.`,  // 7. Proposed $1,000 community project
    ],
  },
  
  {
    name: `Marquita Foster`,
    sortName: `Foster`,
    photo: "",
    bio: `This candidate has requested they be removed from this site. Their responses have been removed at their request, but they are still a write-in candidate according to the Board of Elections.`,
    contact: `N/A`,
    affirmation: "filed",
    answers: [
      `This candidate's responses have been removed at their request.`,  // 1. Top priority for the two-year term
      `This candidate's responses have been removed at their request.`,  // 2. Reaching neighbors who aren't online or don't come to meetings
      `This candidate's responses have been removed at their request.`,  // 3. Escalating an unaddressed 311 request
      `This candidate's responses have been removed at their request.`,  // 4. Community Benefits Agreement for the former UMC site
      `This candidate's responses have been removed at their request`,  // 5. Traffic safety on Southern Avenue
      `This candidate's responses have been removed at their request`,  // 6. Neighbor about to lose housing, can't pay for groceries or utilities
      `This candidate's responses have been removed at their request`,  // 7. Proposed $1,000 community project
    ],
  },
  
];
