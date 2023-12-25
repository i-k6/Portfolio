import {
    amazon,
    ttt_game,
  } from "../assets";

  import { sds, ibm} from '../assets';
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  
  const experiences = [
    {
      title: "Front-end Developer Intern",
      company_name: "IBM",
      icon: ibm,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "WordPress Intern",
      company_name: "Sumeru Digital Solutions",
      icon: sds,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Feb 2023",
      points: [
        "Developing and maintaining web applications using WordPress and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Amazon Clone",
      description:
      "An Amazon clone is a web application that replicates the core functionalities of Amazon.com, such as product browsing, searching, adding to cart, and checkout. It is typically developed using React and Firebase technologies. Amazon clones can be used by businesses of all sizes to create their own online marketplace.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Redux Toolkit",
          color: "green-text-gradient",
        },
      ],
      image: amazon,
      source_code_link: "https://github.com/i-k6/amazon-clone",
      live_link: "https://karnn.netlify.app/",
    },
    {
      name: "Tic-Tac-Toe Game",
      description:
      "Tic-tac-toe, also known as noughts and crosses or Xs and Os, is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: ttt_game,
      source_code_link: "https://github.com/i-k6/tictactoe",
      live_link: "https://i-k6.github.io/tictactoe/",
    },
  ];


  export{
    experiences,
    projects,
  };