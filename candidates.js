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
    bio: `I am a community-focused professional committed to service, advocacy,  accountability, and improving the quality of life for residents in Washington, DC. With more than 20 years of experience in social services and a background in government service, I am dedicated to serving others, addressing community concerns, and helping individuals and families connect with the resources, services, and support they need.`,
    contact: `N/A`,
    affirmation: "filed",
    answers: [
      `My top priority  would be improving communication between residents and the agencies responsible for addressing their concerns. I want residents in ANC 8E05 to feel heard, informed, and connected to the resources they need. My goal is to help build a safer, cleaner, and more connected community where residents feel heard, concerns are taken seriously, and solutions lead to meaningful results`,  // 1. Top priority for the two-year term
      `I would conduct door-to-door outreach when appropriate, and organize informal neighborhood walk-throughs to hear directly from residents and by phone.`,  // 2. Reaching neighbors who aren't online or don't come to meetings
      `I would review the resident's 311 service request number and contact the appropriate District agency directly, provide the number and supporting documentation, and request a status update, and a clear timeline for addressing the problem. If necessary, I would elevate the matter to the agency's supervisory staff and use available ANC channels to seek further assistance. I would keep the resident informed throughout the process and document communications.`,  // 3. Escalating an unaddressed 311 request
      `Enhanced Affordable Housing, healthcare replacement & social Infrastructure,  Hiring and small business opportunities, and connecting residents to resources. Traffic, parking, and public safety: A plan to address increased traffic, parking demands, pedestrian safety, construction noise, and neighborhood disruptions. Community input and transparency and  environmental protections .`,  // 4. Community Benefits Agreement for the former UMC site
      `I would start by listening to residents to understand their concerns and work with the appropriate District agency ( DDOT), to request a traffic safety assessment and discuss solutions supported by the data with residents. My goal would be to bring residents together around a data-driven solution. I would make sure every voice is heard while keeping the focus on improving traffic safety.`,  // 5. Traffic safety on Southern Avenue
      `I would connect her with direct local recourses such as the emergency rental assistance program ( ERAP) , utility assistance through the Department of Energy and Environment (DOEE) for LIHEAP energy help and the Department of Human Services for emergency food stamps ( if she qualifies) and local food banks, churches and pantries for immediate food access. `,  // 6. Neighbor about to lose housing, can't pay for groceries or utilities
      `I would purpose  a neighborhood cleanup and beautification day - purchase supplies . Pedestrian and traffic safety initiative - use funds for outreach materials and safety education. Dog waste station , library/ neighborhood book , safer neighborhood initiative- A coordinated community safety event to address unsafe - e- bike riding , pedestrian and resident concerns, gun violence prevention, and youth engagement. Community connection day .`,  // 7. Proposed $1,000 community project
    ],
  },
  
];
