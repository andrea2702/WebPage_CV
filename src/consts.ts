import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Andrea's Page",
  DESCRIPTION: "Welcome to Andreas Page, a portfolio of some projects and work.",
  AUTHOR: "Andrea Salcedo",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

export const PUBLICATIONS: Page = {
  TITLE: "Publications",
  DESCRIPTION: "Papers publicated.",
}


// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Publications", 
    HREF: "/publications", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "asalcedo2702@gmail.com",
    HREF: "mailto:asalcedo2702@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "andrea2702",
    HREF: "https://github.com/andrea2702"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Andrea Marisol Salcedo Vázquez",
    HREF: "https://www.linkedin.com/in/andrea-marisol-salcedo/",
  },
]

