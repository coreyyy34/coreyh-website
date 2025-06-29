import { Project } from "@/types/project.type";
import {
  TECH_STACK_DEV_TOOLS,
  TECH_STACK_LANGUAGES,
  TECH_STACK_LIBRARIES,
} from "./technology";

const githubUrl = "https://github.com/coreyyy34";

export const PROJECTS: Record<string, Project[]> = {
  personal: [
    {
      title: "Uni-Tracker (Ongoing)",
      type: "Full Stack Web Application",
      category: "personal",
      overview:
        "Uni-Tracker is a web app that helps students manage their academic life by tracking courses, assignments, deadlines, and study resources in one intuitive platform.",
      description: [
        "Uni-Tracker is a full-stack web application designed to simplify the academic experience for students. It centralizes course management, allowing users to track progress, monitor assignment deadlines, and organize study materials like notes and links in one place. The app's clean interface and responsive design make it easy to stay on top of academic responsibilities.",
        "Built with a modern tech stack including Kotlin, TypeScript, Next.js, and Spring Boot. This ongoing project continues to evolve as I explore new features and scalability improvements.",
      ],
      key_features: [
        "Course Progress Tracking: Monitor completion and grades across multiple courses with clear visualizations.",
        "Assignment & Deadline Management: Keep track of due dates with reminders and status updates.",
        "Resource Organization: Store and access study materials, notes, and external links in a centralized hub.",
      ],
      challenges: [
        "Frontend-Backend Integration: Ensuring smooth communication between the Next.js frontend and Spring Boot backend required careful API design.",
        "Scalability Planning: Architecting the database and backend to handle growing user data and course complexity.",
      ],
      technologies: [
        TECH_STACK_LANGUAGES["kotlin"],
        TECH_STACK_LANGUAGES["html"],
        TECH_STACK_LANGUAGES["css"],
        TECH_STACK_LANGUAGES["typescript"],
        TECH_STACK_LIBRARIES["nextjs"],
        TECH_STACK_LIBRARIES["tailwindcss"],
        TECH_STACK_LIBRARIES["springboot"],
        TECH_STACK_DEV_TOOLS["gradle"],
        TECH_STACK_DEV_TOOLS["git"],
        TECH_STACK_DEV_TOOLS["github"],
        TECH_STACK_DEV_TOOLS["sql"],
        TECH_STACK_DEV_TOOLS["redis"],
      ],
      coverImageUrl: "/img/uni-tracker/cover.png",
      imageUrls: [],
    },
    {
      title: "Pallet Labels",
      type: "Frontend Application",
      category: "personal",
      overview:
        "Pallet Labels is a streamlined web app for staff to quickly generate and print formatted pallet labels with SKU and quantity details.",
      description: [
        "Pallet Labels is a lightweight frontend web app built to improve efficiency. Designed during my time at a previous workplace, it allows staff to input product SKUs and quantities through a simple interface, then instantly generate and print formatted labels.",
        "Built with TypeScript, Next.js, and Tailwind CSS, it prioritizes ease of use and reliability for non-technical users.",
      ],
      key_features: [
        "User-Friendly Interface: Simple input fields and minimal design ensure quick adoption by warehouse staff.",
      ],
      technologies: [
        TECH_STACK_LANGUAGES["html"],
        TECH_STACK_LANGUAGES["css"],
        TECH_STACK_LANGUAGES["typescript"],
        TECH_STACK_LIBRARIES["nextjs"],
        TECH_STACK_LIBRARIES["tailwindcss"],
      ],
      coverImageUrl: "/img/pallet-labels/home.png",
      imageUrls: [
        "/img/pallet-labels/home.png",
        "/img/pallet-labels/print.png",
      ],
      sourceCode: `${githubUrl}/pallet-labels`,
    },
  ],
  university: [
    {
      title: "HomeHelper (Ongoing)",
      type: "Full Stack Web Application",
      category: "university",
      universityProjectType: "group",
      overview:
        "HomeHelper is a collaborative renovation tracking web app designed to serve as an all-on-one hub for managing renovation projects. Developing in a group of 7 students using Agile Scrum.",
      description: [
        "HomeHelper is a full-stack renovation management platform built as a year-long university group project. The goal is to centralize all aspects of a home renovation into one intuitive system, eliminating the need for scattered spreadsheets, messages, and tools.",
        "Our vision includes modules for tracking renovation milestones, managing project budgets, assigning and tracking tasks, and communicating with team members via a built-in chat system, similar to Microsoft Teams. Designed to support homeowners, contractors, and DIY enthusiasts, HomeHelper emphasizes collaboration and clarity during renovation workflows.",
        "Our team is following Agile Scrum methodologies throughout development, with regular sprint planning, retrospectives, and continuous integration of new features. The project is ongoing, with plans to implement our vision.",
      ],
      key_features: [
        "Budget Management: Create detailed budgets, monitor expenses, and receive alerts when approaching limits.",
        "Team Communication: Integrated chat system for seamless discussion and coordination between users.",
        "Multi-Project Support: Manage multiple renovations simultaneously with separate dashboards.",
      ],
      challenges: [
        "Team Coordination: Managing workload and consistent progress among seven developers across multiple sprints.",
        "Feature Scope Balance: Maintaining a focused MVP while accommodating feature suggestions from the group.",
        "UX/UI Design Alignment: Unifying individual design preferences into a cohesive, user-friendly interface.",
      ],
      technologies: [
        TECH_STACK_LANGUAGES["java"],
        TECH_STACK_LANGUAGES["html"],
        TECH_STACK_LANGUAGES["css"],
        TECH_STACK_LANGUAGES["javascript"],
        TECH_STACK_LIBRARIES["springboot"],
        TECH_STACK_LIBRARIES["thymeleaf"],
        TECH_STACK_DEV_TOOLS["gradle"],
        TECH_STACK_DEV_TOOLS["git"],
        TECH_STACK_DEV_TOOLS["gitlab"],
        TECH_STACK_DEV_TOOLS["sql"],
      ],
      coverImageUrl: "/img/home-helper/browse.png",
      imageUrls: [
        "/img/home-helper/browse.png",
        "/img/home-helper/renovation.png",
        "/img/home-helper/tasks.png",
        "/img/home-helper/calendar.png",
      ],
    },
    {
      title: "GameVerse",
      type: "Full Stack Web Application",
      category: "university",
      universityProjectType: "individual",
      overview:
        "GameVerse is a web app for gamers to catalog, track, and review their video game collections with features like wishlists and ownership management.",
      description: [
        "GameVerse is a full-stack web application built as an individual university project to help gamers organize their game collections. Users can browse a catalog of games, add titles to their wishlist or owned list, write reviews, and manage game records through full CRUD functionality.",
        "Developed with React, TypeScript, Express, and SQL, the app features a dynamic, responsive UI with user authentication and relational data handling. This project honed my skills in building end-to-end web applications with a focus on user engagement and data management.",
      ],
      key_features: [
        "Game Catalog: Browse and filter games with detailed information and search functionality.",
        "Wishlist & Ownership Tracking: Mark games as owned or add them to a wishlist for future purchases.",
        "User Reviews: Write, edit, and read reviews for games to share insights with others.",
        "CRUD Functionality: Create, update, and delete game records with authentication.",
      ],
      challenges: [
        "Conditional Rendering: Managing complex UI states based on user authentication and interactions.",
      ],
      technologies: [
        TECH_STACK_LANGUAGES["html"],
        TECH_STACK_LANGUAGES["css"],
        TECH_STACK_LANGUAGES["typescript"],
        TECH_STACK_LIBRARIES["react"],
        TECH_STACK_LIBRARIES["tailwindcss"],
        TECH_STACK_LIBRARIES["express"],
        TECH_STACK_DEV_TOOLS["sql"],
      ],
      coverImageUrl: "/img/gameverse/home.png",
      imageUrls: [
        "/img/gameverse/home.png",
        "/img/gameverse/detailed-game.png",
        "/img/gameverse/profile.png",
        "/img/gameverse/my-games.png",
        "/img/gameverse/create-game.png",
        "/img/gameverse/delete-game.png",
      ],
    },
    {
      title: "WINO",
      type: "JavaFX Application",
      category: "university",
      universityProjectType: "group",
      overview:
        "WINO is a JavaFX app for wine lovers to explore wines, plan vineyard tours, and engage with a community through reviews and interactive maps.",
      description: [
        "WINO is a JavaFX desktop application developed as a group university project for wine enthusiasts. It offers a rich database of wines and vineyards, complete with detailed descriptions and an interactive map for discovering winery locations. Users can plan personalized vineyard tours and share reviews with others.",
        "Built collaboratively by a team of six, WINO integrates complex features like map visualizations, user authentication, and social engagement tools.",
      ],
      key_features: [
        "Wine & Vineyard Database: Access detailed information on wines and their origins.",
        "Interactive Map: Visualize winery locations and explore regional wine offerings.",
        "Tour Planning: Create custom vineyard tour itineraries with curated winery lists.",
        "Community Reviews: Share and read wine reviews to connect with other enthusiasts.",
      ],
      challenges: [
        "Team Collaboration: Coordinating tasks and integrating modules across a large team.",
        "Map Integration: Implementing interactive geographical maps within JavaFX's constraints.",
      ],
      technologies: [
        TECH_STACK_LANGUAGES["java"],
        TECH_STACK_LIBRARIES["javafx"],
        TECH_STACK_DEV_TOOLS["gradle"],
        TECH_STACK_DEV_TOOLS["git"],
        TECH_STACK_DEV_TOOLS["gitlab"],
        TECH_STACK_DEV_TOOLS["sql"],
      ],
      coverImageUrl: "/img/wino/home.png",
      imageUrls: [
        "/img/wino/home.png",
        "/img/wino/wine-view.png",
        "/img/wino/wines-map.png",
        "/img/wino/wines-map-expanded.png",
        "/img/wino/wine-tour.png",
        "/img/wino/social.png",
        "/img/wino/help.png",
      ],
      sourceCode: `${githubUrl}/WINO-SENG202-Project`,
    },
    {
      title: "ResourceRush",
      type: "JavaFX Application",
      category: "university",
      universityProjectType: "pair",
      overview:
        "ResourceRush is a JavaFX tower defense game where players place towers to fill resource carts, featuring dynamic gameplay and random events.",
      description: [
        "ResourceRush is a JavaFX-based tower defense game inspired by Balloon Tower Defense, developed as a paired university project. Players place towers on a grid to fill resource carts moving along a track, earning points to buy towers or special items like speed boosts and repairs.",
        "The game incorporates a real-time game loop, sprite animations, and random events that alter gameplay, such as speed changes or disabled towers. This project was my first dive into JavaFX, teaching me about event-driven programming, UI design, and collaborative development.",
      ],
      key_features: [
        "Tower Placement: Drag and drop towers on a grid to fill passing resource carts.",
        "Dynamic Game Loop: Real-time updates for cart movement and tower interactions.",
        "Special Items: Use points for items like speed boosts, slowdowns, or instant cart fills.",
        "Random Events: Unique events each round to keep gameplay unpredictable and engaging.",
      ],
      challenges: [
        "Pair Programming: Dividing tasks and merging code effectively with a partner.",
        "MVC Architecture: Separating game logic, data, and UI for maintainable code.",
      ],
      technologies: [
        TECH_STACK_LANGUAGES["java"],
        TECH_STACK_LIBRARIES["javafx"],
      ],
      coverImageUrl: "/img/resource-rush/game-play.png",
      imageUrls: [
        "/img/resource-rush/menu.png",
        "/img/resource-rush/game-play.png",
        "/img/resource-rush/place-tower.png",
        "/img/resource-rush/lost.png",
      ],
      sourceCode: `${githubUrl}/ResourceRush-SENG201-Project`,
    },
    {
      title: "Battleships",
      type: "Embedded Application",
      category: "university",
      universityProjectType: "pair",
      overview:
        "Battleships is an embedded game for the UCFK4 microcontroller, enabling turn-based multiplayer via IR communication and a 5x7 LED display.",
      description: [
        "Battleships is an embedded application developed for the UCFK4 microcontroller as a paired university project. Players select ship layouts on a 5x7 LED grid and compete by exchanging moves via IR communication, creating a seamless multiplayer experience.",
        "Written in C, the game optimizes for the microcontroller's limited RAM and storage, requiring efficient memory management and low-level programming. This project deepened my understanding of hardware constraints, IR communication, and real-time game logic.",
      ],
      key_features: [
        "Multiplayer via IR: Exchange moves between two UCFK4 boards for turn-based gameplay.",
        "LED Grid Interface: Use the 5x7 LED matrix and buttons for intuitive controls.",
        "Real-Time Interaction: Responsive input handling for smooth player experiences.",
      ],
      challenges: [
        "Memory Optimization: Fitting game logic within the UCFK4's limited memory constraints.",
        "Reliable IR Communication: Ensuring accurate move transmission between devices.",
        "Low-Level Programming: Managing hardware registers and minimal libraries in C.",
      ],
      technologies: [TECH_STACK_LANGUAGES["c"]],
      coverImageUrl: "/img/battleships/ucfk4.jpg",
      imageUrls: ["/img/battleships/ucfk4.jpg"],
      sourceCode: `${githubUrl}/Battleships-ENCE260-Project`,
    },
  ],
};

export const PROJECTS_LIST: Project[] = Object.keys(PROJECTS).flatMap(
  (category) =>
    PROJECTS[category].map((project) => ({
      ...project,
    })),
);
