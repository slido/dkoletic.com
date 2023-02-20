import { 
    linkedin,  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About me",
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
  
  export const projects = [
    {
      id: 'project-1',
      imgUrl: '/work1.jpg',
      title: 'Admin Business Application',
      description:'Full Stack JavaScript application with React, Redux-Toolkit, Material UI, NodeJS, Express, OpenAI API implemented. Admin with JWT Auth, Products crud. Using OpenAI API you can learn coding or generate texts.',
      link: "",
      git:""
    },
    {
      id: 'project-2',
      imgUrl: '/work2.jpg',
      title: 'Landing Page - Figma to React',
      description: 'A landing page example, sliced from Figma design, using Tailwind CSS.',
      link: "https://figma-to-react-production.up.railway.app/",
      git:"https://github.com/slido/figma-to-react"
    },
  ];
  
  export const techStack = [
    {
      id: "feature-1",
      icon: "./react.png",
      title: "ReactJS",
      content:
        "Deep understanding of Functional Components with Hooks arhitecture and Redux state management.",
    },
    {
      id: "feature-2",
      icon: "./node.png",
      title: "NodeJS",
      content:
        "Experience in making API-s with Express, and communication with third party services.",
    },
    {
      id: "feature-3",
      icon: "./typescript.png",
      title: "Typescript",
      content:
        "Writing React with Typescript Interfaces.",
    },
    {
      id: "feature-4",
      icon: "./nextjs1.png",
      title: "NextJS",
      content:
        "For non admin type websites best solution wiht server rendered pages for better SEO results.",
    },
    {
      id: "feature-5",
      icon: "./tailwind.png",
      title: "TailWindCSS",
      content:
        "Writng CSS without writing CSS <3.",
    },
    {
      id: "feature-6",
      icon: "./material.png",
      title: "MaterialUI",
      content:
        "Deep understanding of framework, best for admin like applications. A lot of great components.",
    },
    {
      id: "feature-7",
      icon: "./git.png",
      title: "Git",
      content:"",
    },
  ];
  
  
  export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "How it Works",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "Create",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Explore",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "Terms & Services",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ], 
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Partners",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Suggestions",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Newsletters",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];
  
  export const socialMedia = [
 {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/in/denis-koletic/",
    },
  ];
  