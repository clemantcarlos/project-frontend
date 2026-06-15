<div align="center">

🏫 Project Frontend — School Management SPA

Angular frontend for the School Management System

[!TypeScript](https://www.typescriptlang.org/)
[!Angular](https://angular.dev/)
[!Tailwind CSS](https://tailwindcss.com/)
[!FontAwesome](https://fontawesome.com/)
[!License](LICENSE)

</div>

> 📚 Learning Project — This project was built to practice building enterprise-grade SPAs with Angular.

***

## 📋 About the Project

Project Frontend is an Angular 17 single-page application for the School Management System ("Escuela"). It provides a complete admin panel with user management, student views, staff views, configuration, and reporting modules.

## ✨ Features

| Feature | Description |
|---------|-------------|
| Authentication | Login with route guards |
| User Management | Full CRUD for system users |
| Student Views | Home and management for students ("alumno") |
| Staff Views | Home and management for staff ("personal") |
| Configuration | System settings module |
| Reports | General and student-by-section reports |
| PDF Generation | Document generation with pdfmake |
| Responsive | Mobile-friendly with Tailwind CSS |

## 🏗️ Architecture

```
project-frontend/
├── src/
│   ├── app/
│   │   ├── components/          # Shared UI components
│   │   ├── config/              # Configuration module
│   │   ├── guards/              # Route guards
│   │   ├── home-alumno/         # Student home view
│   │   ├── home-personal/       # Staff home view
│   │   ├── interfaces/          # TypeScript interfaces
│   │   ├── login/               # Authentication module
│   │   ├── page404/             # 404 page
│   │   ├── reportes/            # Reports module (Spanish)
│   │   ├── reports/             # Reports module (English)
│   │   ├── services/            # API communication services
│   │   ├── user/                # User management
│   │   ├── users/               # Users list module
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/                  # Static assets
│   ├── styles.css               # Global styles
│   └── main.ts                  # Entry point
├── angular.json
├── tsconfig.json
└── package.json
```

## 🛠️ Tech Stack

- **Framework:** Angular 17
- **Styling:** Tailwind CSS 3 + Custom CSS
- **Icons:** FontAwesome (Angular integration)
- **Alerts:** SweetAlert2
- **PDF:** pdfmake
- **UI Elements:** tw-elements
- **Language:** TypeScript 5.2

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/project-frontend.git
cd project-frontend

# Install dependencies
npm install
```

### Running the Application

```bash
ng serve          # Start development server
ng build          # Build for production
ng test           # Run unit tests
```

The application will be available at `http://localhost:4200`.

## 📦 Available Commands

| Command | Description |
|---------|-------------|
| `ng serve` | Start Angular dev server |
| `ng build` | Build for production |
| `ng test` | Run unit tests |
| `ng build --watch` | Build in watch mode |

## 📄 License

This project is licensed under the MIT License. See LICENSE for more details.

***

## 👤 Author

**Carlos Clemant**

[!GitHub](https://github.com/your-username)
[!LinkedIn](https://linkedin.com/in/your-profile)

***
<div align="center">

If you found this project helpful, give it a ⭐!

</div>
