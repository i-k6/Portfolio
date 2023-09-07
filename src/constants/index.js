import {
    video,
    Photoshop,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    amazon,
    ttt_game,
    threejs,
    fed_ibm,
    cyber_ibm,
    sdsi,
    nlvl,
    slvl,
    dlvl,

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
      id: "Achievements",
      title: "Achievements",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Video Editor",
      icon: video,
    },
    {
      title: "Graphic Designer",
      icon: Photoshop,
    },
    {
      title: "Web3",
      icon: creator,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
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



  const certificates = [
    {
      name: "IBM Front-End Development Internship Certificate",
      description:
      "I interned at IBM in front-end web development, where I gained hands-on experience in designing and building user-friendly web interfaces.",
      c_image: fed_ibm,
      c_link: "https://drive.google.com/file/d/1FDYdcxxfYXO706mSl0jqJPvG6Q4laKV2/view?usp=sharing",
    },
    {
      name: "IBM CyberSecurity Internship Certificate",
      description:
      "I interned at IBM in cybersecurity, where I focused on protecting digital assets and data through various security measures and strategies.",
      c_image: cyber_ibm,
      c_link: "https://drive.google.com/file/d/1Sx1rSqkCt8y7C78rgRogNIPwu4wJ7Hwr/view?usp=sharing",
    },
    {
      name: "WordPress Internship Certificate",
      description:
      "I interned at Sumeru Digital Solutions, specializing in WordPress web development. During my internship, I honed my skills in creating and customizing WordPress websites to deliver tailored and visually appealing online solutions.",
      c_image: sdsi,
      c_link: "https://drive.google.com/file/d/17p9EZuF8161zweT6TKnVBQZ6BJtLx6vH/view?usp=drive_link",
    },
    {
      name: "National Level",
      description:
      "I participated in the Inspire Awards Science Exhibition held at IIT Delhi in 2015 and received a certificate in recognition of my participation and contribution to the event.",
      c_image: nlvl,
      c_link: "https://drive.google.com/file/d/1EmpqPi6YrMwwdAZgE0W_R8MFKpFc8r_N/view?usp=drive_link",
    },
    {
      name: "State Level",
      description:
      "I participated and won at the state-level Inspire Awards Science Exhibition held in 2015, earning a certificate for my achievement.",
      c_image: slvl,
      c_link: "https://drive.google.com/file/d/1Enhs2qM87KJKaKBBSBmT_DFuwAlZ4Mbj/view?usp=drive_link",
    },
    {
      name: "District Level",
      description:
      "I participated and won at the District-level Inspire Awards Science Exhibition held in 2015, earning a certificate for my achievement.",
      c_image: dlvl,
      c_link: "https://drive.google.com/file/d/1EpmoS-m5XhbfnsU-b5VKCB_wSGiAErv1/view?usp=drive_link",
    },
  ];


  export{
    services, 
    technologies,
    experiences,
    projects,
    certificates
  };