
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Manshusainishab",
  title: "Hi all, I'm Manshu Saini",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1iBhIuI7x-qHFyhmEeMlnn6Vo_rQ0n2hK/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/manshusainishab",
  linkedin: "https://www.linkedin.com/in/manshusainishab/",
  gmail: "manshupallav@gmail.com",
  facebook: "https://www.facebook.com/manshu.sainishab/",
  instagram: "https://www.instagram.com/my_nst_daze/",
  // leetcode: "https://leetcode.com/u/manshusainishab/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ I hold a keen interest in CP (Competitive Programming)."),
    emoji(
      "⚡ Love to learn new Technologies."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Delhi Public School",
      logo: require("./assets/images/dpslogo.png"),
      subHeader: "Senior Secondary",
      duration: "April 2018 - April 2022",
      desc: "Passed my CBSE Board Exams with PCM (Physics, Chemistry, Maths).",
      descBullets: [
        "Secured 82% in 10TH standard",
        "Secured 77% in 12TH standard"
      ]
    },
    {
      schoolName: "Rishihood University",
      logo: require("./assets/images/rishihoodlogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2023 - Till Now",
      desc: "Mastering my skills in DSA and Web Development and other new age technologies.",
      descBullets: ["Secured 8.2 CGPA in First Semester."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects i Created in my First Year of college.",
  projects: [
    {
      image: require("./assets/images/theartgallerylogo.png"),
      projectName: "The Art Gallery",
      projectDesc: "Art Gallery: A global nexus for art lovers, collectors, and creators.Effortless interface for discovering, buying, and selling artworks.Curated collection celebrates talents across mediums, fostering vibrant community engagement.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://eloquent-licorice-0228c7.netlify.app"
        },{
          github: "GitHub Repo",
          url: "https://github.com/manshusainishab/artgallerymanshu"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/MRABlogo.png"),
      projectName: "In a single night, crafted a streamlined Mess and Canteen Booking System, ensuring convenience.Intuitive features guarantee a hassle-free experience, showcasing rapid prototyping skills.Efficiently developed under tight deadlines, the system exemplifies innovation and functionality.",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/manshusainishab/MRAB-DINE-APP"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Achievements, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Ranked Top 1200 in ICPC preliminary round 2023",
      subtitle:
        "During my inaugural year of college, I participated in the esteemed ICPC, one of the most prestigious coding competitions globally.",
      image: require("./assets/images/icpc_logo.png"),
      imageAlt: "Icpc Logo Logo",
      footerLink: [
        {
          name: "My Rank",
          url: "https://drive.google.com/file/d/1cBDD9TlTeNoUJ1IGhJH511yz3brw5Wqz/view?usp=drive_link"
        },
      ]
    },
    {
      title: "Leetcode 100 Days Challenge",
      subtitle:
        "I am on a Challenge of doin 100 days LEETCODE Problems and post them on my Instagram.",
      image: require("./assets/images/LeetCodelogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "My Leetcode",
          url: "https://leetcode.com/u/manshusainishab/"
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/my_nst_daze/"
        }
      ]
    },
    {
      title: "Neutron - TechFest",
      subtitle:
        "I was a core team member of Neutron Fest, India's pioneering new-age Ai Techno Cultural Fest, I contributed to shaping an innovative and impactful event. ",
      image: require("./assets/images/neutronlogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Neutron Website",
          url: "https://www.neutronfest.com/"
        },
        {
          name: "Neutron Insta",
          url: "https://www.instagram.com/neutronfest.nst/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-00000000",
  email_address: "manshupallav@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
