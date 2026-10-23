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
