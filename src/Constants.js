import SCRUMPTIOUS from "./Assets/Projects/Scrumptious2.png";
import BUCKET from "./Assets/Projects/DKTB.png";
import CARCAR from "./Assets/Projects/CarCar.png";


export const PROJECTS = [
  {
    image: BUCKET,
    name: "Don't Kick the Bucket",
    technologyUsed: "Django || React || Hooks || Bootstrap || PostgreSQL || Heroku || Docker",
    description: "Don't Kick the Bucket is a full-stack web app comprised of a 5 person dev team that leverages 3rd party APIs to create an extensive network of information for National Park/ Outdoor adventures",
    url: "https://gitlab.com/modzilla-mafia/dont-kick-the-bucket",
  },
  {
    image: CARCAR,
    name: "CarCar",
    technologyUsed: "Django || React || Hooks || Bootstrap || PostgreSQL || Docker",
    description: "Composed of a small 2 person dev team. CarCar is a full stack micro-service structured car dealership management app utilizing RESTful API that manages sales of vehicles, inventory, vehicle maintenance appointments and service technicians. ",
    url: "https://gitlab.com/strhyne90/project-beta",
  },
  {
    image: SCRUMPTIOUS,
    name: "Scrumptious",
    technologyUsed: "Django || SQLite || CSS || HTML",
    description: "A solo project, full stack web application that tracks and stores recipes conveniently. Add recipes to your cookbook, dynamically render measurements, comment and rate other recipes ",
    url: "https://gitlab.com/grobertson743/scrumptious-recipes",
  }

];

export const SKILLS = [
  { name: "Python", initialRating: 4 },
  { name: "Django", initialRating: 4 },
  { name: "JavaScript", initialRating: 4 },
  { name: "React", initialRating: 4 },
  { name: "Docker", initialRating: 4 },
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 3 },
  { name: "Git", initialRating: 4 },
];

export const TOOLS =
  ["Visual Studio Code", "Docker", "Insomnia", "Git",
    "Chrome DevTools", "Npm (Node Package Manager)", "Heroku",]
