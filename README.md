# pweb-fp-P09-2024

#INPO FILE STRUCTURE
##Frontend
/frontend
├── /public
│   └── index.html
├── /src
│   ├── /assets               # Static assets
│   ├── /components           # Reusable Vue components
│   │   ├── Navbar.vue        # Navbar component
│   │   ├── Footer.vue        # Footer component
│   │   ├── FeedbackForm.vue  # Feedback form component
│   │   ├── LoginForm.vue     # Login form component
│   │   └── CrowdfundCard.vue # Crowdfund display card
│   ├── /views                # Page views
│   │   ├── Home.vue          # Home/Landing Page
│   │   ├── Feedback.vue      # Feedback Page
│   │   ├── News.vue          # News Page
│   │   └── Login.vue         # Login Page
│   ├── /router               # Vue Router setup
│   │   └── index.js          # Routes configuration
│   ├── /services             # Backend API calls
│   │   └── api.js            # Axios configuration
│   ├── /styles               # Global CSS
│   │   └── main.css          # Main global stylesheet
│   ├── App.vue               # Root component
│   └── main.js               # Project entry point
├── package.json              # Project dependencies
└── vite.config.js            # Vite configuration
