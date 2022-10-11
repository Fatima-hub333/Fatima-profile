//next
import nextDesktop from "./images/portfolio/desktop/next.png";
import nextTablet from "./images/portfolio/tablet/next.png";
import nextMobile from "./images/portfolio/mobile/next.png";

//colors
import colorDesktop from "./images/portfolio/desktop/color.png";
import colorTablet from "./images/portfolio/tablet/color.png";
import colorMobile from "./images/portfolio/mobile/color.png";

//AudioPhile
import FinishedAudioPhileDesktop from "./images/portfolio/desktop/Finished-AudioPhile.png";
import FinishedAudioPhileTablet from "./images/portfolio/tablet/Finished-AudioPhile.png";
import FinishedAudioPhileMobile from "./images/portfolio/mobile/Finished-AudioPhile.png";

//Budget
import FinishedbudgetDesktop from "./images/portfolio/desktop/Finished-budget.png";
import FinishedbudgetTablet from "./images/portfolio/tablet/Finished-budget.png";
import FinishedbudgetMobile from "./images/portfolio/mobile/Finished-budget.png";

//loop
import FinishedLoopDesktop from "./images/portfolio/desktop/Finished-Loop.png";
import FinishedLoopTablet from "./images/portfolio/tablet/Finished-Loop.png";
import FinishedLoopMobile from "./images/portfolio/mobile/Finished-Loop.png";

//Crowded
import FinishedCrowdedDesktop from "./images/portfolio/desktop/Finshed-Crowded.png";
import FinishedCrowdedTablet from "./images/portfolio/tablet/Finshed-Crowded.png";
import FinishedCrowdedMobile from "./images/portfolio/mobile/Finshed-Crowded.png";

const projects = [
  {
    id: 1,
    category: "HTML",
    title: "Landing Page",
    lang: ["HTML", "CSS", "JS"],
    url: "https://github.com/Fatima-hub333/next-website",
    live: "https://next-website-lime.vercel.app/",
    slug: "next-website",
    info: "This Project was made back then when I Started my Web Design. It was made to actually text my css layout grids. and of cause, it responsive across all web surfer devices.\nThis was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.\nThis Project was done to perfect setting down of reponsiveness in a website.",
    images: {
      mobil: nextMobile,
      tablet: nextTablet,
      desktop: nextDesktop,
    },
  },
  {
    id: 2,
    category: "HTML",
    title: "The Color Website",
    lang: ["HTML", "CSS", "JS"],
    url: "https://github.com/Fatima-hub333/color-website",
    live: "https://color-website-delta.vercel.app/",
    slug: "color-website",
    info: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.\nThis Project was done to perfect setting down of reponsiveness in a website.",
    images: {
      mobil: colorMobile,
      tablet: colorTablet,
      desktop: colorDesktop,
    },
  },
  {
    id: 3,
    category: "React",
    title: "Tip Calculator",
    lang: ["HTML", "CSS", "REACT"],
    url: "https://github.com/Fatima-hub333/react-calculator",
    live: "https://react-calculator-blond-omega.vercel.app/",
    slug: "tip-website",
    info: "A simple Tip Calculator that calculates tip amount for various percentages of the cost of the service, and also provides a total amount that includes the tip.\nThis Project was done to perfect setting down of reponsiveness in a website.",
    images: {
      mobil: FinishedbudgetMobile,
      tablet: FinishedbudgetTablet,
      desktop: FinishedbudgetDesktop,
    },
  },
  {
    id: 4,
    category: "React",
    title: "AudioPib E-Commerce",
    lang: ["HTML", "CSS", "REACT"],
    url: "https://github.com/Fatima-hub333/Ecommerce-Website",
    live: "https://ecommerce-website-ixmh.vercel.app/",
    slug: "audiopib-website",
    info: "A Fully fledged E-Commerce developed using React Framework. AudioPhile sells gadgets like Heaphones, EarPhones, Speakers of all models",
    images: {
      mobil: FinishedAudioPhileMobile,
      tablet: FinishedAudioPhileTablet,
      desktop: FinishedAudioPhileDesktop,
    },
  },
  {
    id: 5,
    category: "HTML",
    title: "Loop Studio",
    lang: ["HTML", "CSS", "JS"],
    url: "https://github.com/Fatima-hub333/poop-studio",
    live: "https://poop-studio.vercel.app/",
    slug: "poop-website",
    info: "A Fully fledged E-Commerce developed using React Framework.",
    images: {
      mobil: FinishedLoopMobile,
      tablet: FinishedLoopTablet,
      desktop: FinishedLoopDesktop,
    },
  },
  {
    id: 6,
    category: "HTML",
    title: "CrowdFunding",
    lang: ["HTML", "CSS", "JS"],
    url: "https://github.com/Fatima-hub333/crowd-funding-website",
    live: "https://crowd-funding-website.vercel.app/",
    slug: "crowd-website",
    info: "CrowdFunding Project is the practice of funding a project or venture by raising small amounts of money from a large number of people, typically via the Internet. Design Challenge By Frontend Mentor, Coded by me",
    images: {
      mobil: FinishedCrowdedMobile,
      tablet: FinishedCrowdedTablet,
      desktop: FinishedCrowdedDesktop,
    },
  },
];

export default projects;
