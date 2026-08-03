// import React from 'react';

// // 1. Importer les images
// import BDLImage from '../assets/projects/BDL.jpg';
// import ArmoniaImage from '../assets/projects/Armonia.jpg';

// projectsData.js :
export const projectsData = [
  {
    id: 1,
    title: "Ball Don't Lie - E-commerce de Matériel de Basket",
    description: "Application web full-stack de boutique en ligne fictive dédiée au matériel de basket, avec gestion de panier et interface d'administration.",
    // 2. Utiliser la variable importée, PAS une chaîne de caractères
    image: "/assets/projects/BDL.jpg",
    tags: ["React", "Node.js", "Bootstrap CSS", "MongoDB"],
    githubUrl: "https://github.com/Joko8e/Projet-BDL",
    demoUrl: "https://projet-bdl.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Armonia - Site Web d'Entreprise",
    description: "Site web d'entreprise pour lequel j'ai travaillée dans le cadre de mon stage chez Proximity (TBWA) présentant l'histoire, les services et les valeurs de la société Armonia.",
    // 2. Utiliser la variable importée, PAS une chaîne de caractères
    image: "/assets/projects/Armonia.jpg",
    tags: ["Next.js", "JavaScript", "TypeScript", "SCSS Modules"],
    demoUrl: "https://armonia.team/fr-fr/nous-connaitre/notre-histoire",
    featured: true
  }
];