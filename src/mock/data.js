import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: "Gestion d'académie",
    info: "Ce projet développé en C# avec l'outil Visual studio consiste à gérer les étudiants d'une école, les matières, les salles, les enseignants et les évaluations ",
    info2: '',
    url: '',
    repo: 'https://github.com/IvanGael/gesAcad', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Réservations dans un restaurant',
    info: 'Ce projet développé avec react permet de faire une réservation de place dans un restaurant de son choix et géolocaliser ce restaurant.',
    info2: '',
    url: 'https://stageprojet-b5b51.web.app/',
    repo: 'https://github.com/IvanGael/Resfood', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Gestion hotelière',
    info: "Ce projet développé avec angular consiste en la gestion d'un hotel, les chambres, les clients...",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/IvanGal19',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ivan-apedo-b8a0781ba',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/IvanGael',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
