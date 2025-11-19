import fluxkart from '../assets/fluxkart.png';
import algoVision from '../assets/dsaVis.png';
import vmi from '../assets/vmi.png';
import residesk from '../assets/residesk.png';

const projects = [
  {
    title: "Apartment Issue Resolution Platform",
    description:
      "A role-based web platform that improved issue resolution time by 30%. Includes image uploads, a voting system, and automated categorization.",
    image: residesk,
    technologies: ["React.js", "Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Sorting Algorithm Visualizer",
    description:
      "A modern React visualizer for sorting algorithms with speed and array-size controls. Built for intuitive learning.",
    image: algoVision,
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "HTML"],
    liveUrl: "https://sorting-visualizer-react-omega.vercel.app/",
    githubUrl: "https://github.com/samhit-yadav/Sorting-Algorithm-Visualizer-React",
    featured: true,
  },
  {
    title: "Vendor Managed Inventory (VMI) System",
    description:
      "Optimized inventory operations to reduce stockouts by 35% using EOQ models. Automated workflows reduced manual processing by 50%.",
    image: vmi,
    technologies: ["Java", "Spring Boot", "React.js", "PostgreSQL", "REST APIs"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "FluxKart Contact Identification Service",
    description:
      "A backend service using graph-based traversal for identity resolution. Reduces duplicate contacts by 40%.",
    image: fluxkart,
    technologies: ["Java", "Spring Boot", "React.js", "REST APIs"],
    liveUrl: "https://fluxkart-frontend.vercel.app/",
    githubUrl: "https://github.com/samhit-yadav/fluxkart-backend",
    featured: false,
  },
];

export default projects;
