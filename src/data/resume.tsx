import { Icons } from "@/components/icons";
import { HomeIcon, icons, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Sundaram Pandey",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I love building things and helping people.",
  summary:
    "I'm a pre-final year student with a passion for technology and entrepreneurship. I love building tech projects and exploring new concepts in coding and development.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Redis",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pandeyjisundaram.com",
    tel: "+917052098345",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sundarampandey19",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pandeysundaram/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/pandeygsundaram",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "CMR Engineering College",
      href: "#",
      degree: "Bachelor of Engineering",
      logoUrl: "",
      start: "2022",
      end: "2026",
    },

  ],
  projects: [
    {
      title: "Temazon",
      href: "https://github.com/Sundarampandey19/ClassLink",
      dates: "Mar 2024 - June 2024",
      active: false,
      description: "Designed an intuitive user interface with TailwindCSS and Daisy UI components, achieving a higher user satisfaction rate. Integrated Mongodb database with Prisma ORM for seamless user data persistence, for up to 100,000 users. ",

      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Sundarampandey19/ClassLink",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:"",
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Class Link",
      href: "https://github.com/Sundarampandey19/ClassLink",
      dates: "June 2023 - Present",
      active: false,
      description:
      "Developed a scalable architecture using Redis pub-sub , Real-time chat application. Designed a responsive UI using TailwindCSS, Shadcn UI, and Magic UI components, improving user experience and reducing bounce rate. Utilized JWT for authentication, adding to the overall security of the application.",
      technologies: [
        "React.js",
        "Javascript",
        "MySQL",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Sundarampandey19/ClassLink",
          icon: <Icons.globe className="size-3" />,
        },
       
      ],
      image: "",
      video: "",
    },
   
  ],
  hackathons: [
    {
      title: "Hack The Verse",
      dates: "November 23rd - 25th, 2023",
      location: "Hyderabad, Telangana",
      description:
        "Developed a Retrival Augmented Generation based Chatbot for carrer counselling usecase.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Codeothon",
      dates: "February 14th - 16th, 2024",
      location: "Geetanjali College of engineering, Hyderabad, Telangana",
      description:
        "Developed a E-Learning Platform which helped the learners getting better at their subject",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [{
        title:"Github",
        icon:<Icons.github className="h-4 w-4" />,
        href:"https://github.com/Sundarampandey19/Main-repo-Alchademy-"
      }],
    },
    {
      title: "Hack Xcelerate Hackathon",
      dates: "April 23rd - 24th, 2024",
      location: "CBIT , Hyderabad, Telangana",
      description:
        "Developed a Platform where a user can plan their a sub-urban area with the help of our software",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [{
        title:"Github",
        icon:<Icons.github className="h-4 w-4" />,
        href:"https://github.com/Sundarampandey19/EcoCity_Builder"
      }],
    },
    {
      title: "Algo Hack",
      dates: "July 3rd - 4th, 2024",
      location: "Malla Reddy Engineering College ,Hyderabad , Telangana",
      description:
        "Solved various problems on Data Structure and Algorithm",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [],
        // {
        //   title: "Github",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/cryptotrends/cryptotrends",
        // },
    },
    
  ],
} as const;
