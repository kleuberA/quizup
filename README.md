# 📌 Overview

This project is a simple quiz site called quizUp, built using NextJs with supabase. The objective is to create a question application where the user can answer several questions, resulting in a right or wrong answer. QuizUp is a project built with Next.js and Tailwind on the Frontend, supabase for database storage on the Backend. A bonus feature of the app is the dark mode option.

# 📝 Requirements

-   Node.js (version 20)

# 🔍Technologies

-   **Next.js** for building the user interface.
-   **Tailwind** CSS for styling.
-   **TypeScript** for type safety.
-   **Supabase** open-source database platform.

# 📁 Project Structure

```
├── .next
├── .vercel
├── node_modules
├── package.json
├── postcss.config.mjs
├── [public]
│    ├── loginImage.svg
│    ├── next.svg
│    └── vercel.svg
├── README.md
├── [src]
│    ├── [app]
│    │    ├── [auth]
│    │        ├── [forgotpassword]
│    │            └── page.tsx
│    │        ├── [signin]
│    │            └── page.tsx
│    │        └── [signup]
│    │            └── page.tsx
│    │    ├── favicon.ico
│    │    ├── globals.css
│    │    ├── layout.tsx
│    │    ├── page.tsx
│    │    └── [quiz]
│    │        └── page.tsx
│    ├── [components]
│    │    ├── [auth]
│    │        ├── [signin]
│    │            └── SignInComponent.tsx
│    │        └── [signup]
│    │            └── SignUpComponent.tsx
│    │    ├── [home]
│    │        └── [menu]
│    │            └── MenuHome.tsx
│    │    ├── Loader.tsx
│    │    ├── [menu]
│    │        └── Menu.tsx
│    │    ├── [questions]
│    │        ├── Question.tsx
│    │        ├── questions.ts
│    │        ├── Questions.tsx
│    │        ├── teste.json
│    │        └── teste.py
│    │    ├── ReactQueryClientProvider.tsx
│    │    ├── theme-provider.tsx
│    │    ├── toggle-theme.tsx
│    │    ├── [ui]
│    │        ├── button.tsx
│    │        ├── card.tsx
│    │        ├── dropdown-menu.tsx
│    │        ├── form.tsx
│    │        ├── input.tsx
│    │        └── label.tsx
│    │    └── [user]
│    │        └── User.tsx
│    ├── [hooks]
│    │    ├── isAuthenticated.ts
│    │    └── use-supabase.ts
│    ├── [lib]
│    │    └── utils.ts
│    ├── [queries]
│    └── [utils]
│    │    ├── database.types.ts
│    │    └── supabase.ts
[supabase]
│    ├── .gitignore
│    ├── [.temp]
│    │    ├── gotrue-version
│    │    ├── pooler-url
│    │    ├── postgres-version
│    │    ├── project-ref
│    │    ├── rest-version
│    │    └── storage-version
│    ├── config.toml
│    └── seed.sql
├── tailwind.config.ts
├── tsconfig.json
```

# 📝 Project Summary

-   [.next]: Contains Next.js build artifacts and configuration.
-   [.vercel]: Vercel deployment configuration and metadata.
-   [node_modules]: Node.js dependencies installed by npm or yarn.
-   [public]: Publicly accessible assets like images and favicon.
-   [src]: Source code directory for the project.
    -   [src\app]: Application-specific code and components.
    -   [src\app\api\trpc[trpc]]: tRPC API routes and configurations.
    -   [src\app\components]: Reusable React components.
    -   [src\app\pages]: React pages for different views.
    -   [src\app\types]: TypeScript type definitions.
    -   [src\app\layout.tsx]: Main layout component.
    -   [src\app\page.tsx]: Base page component.
    -   [src\assets]: Project assets like images and fonts.
    -   [src\env.js]: Environment configuration file.

*   [.env and .env.example]: Environment variable configuration.
*   [.eslintrc.cjs and .gitignore]: ESLint configuration and Git ignore rules.
*   [next-env.d.ts and next.config.js]: Next.js environment declarations and configuration.
*   [package-lock.json and package.json]: Node.js package manager files.
*   [postcss.config.cjs and prettier.config.js]: PostCSS and Prettier configuration.
*   [tailwind.config.ts]: Tailwind CSS configuration.
*   [tsconfig.json]: TypeScript configuration file.
*   [vercel.json]: Vercel deployment configuration.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📷 Screenshots

![App Screenshot](https://imgur.com/hmGNgdY.png)

![App Screenshot](https://imgur.com/y6E2Kmo.png)

![App Screenshot](https://imgur.com/sWakt6U.png)

![App Screenshot](https://imgur.com/JCPX5l2.png)

![App Screenshot](https://imgur.com/hID32mP.png)

![App Screenshot](https://imgur.com/oIyakBJ.png)

# Dark Mode

![App Screenshot](https://imgur.com/H1jFEhJ.png)

![App Screenshot](https://imgur.com/phGSqIS.png)

![App Screenshot](https://imgur.com/eZ8DNCJ.png)

![App Screenshot](https://imgur.com/qNPnAy7.png)

![App Screenshot](https://imgur.com/cqkiowy.png)

![App Screenshot](https://imgur.com/3tE3RWt.png)

# Responsive Design

![App Screenshot](https://imgur.com/CEFUkmR.png)

![App Screenshot](https://imgur.com/ou7FZAW.png)

![App Screenshot](https://imgur.com/5vPmR9n.png)

![App Screenshot](https://imgur.com/niMwbNg.png)

# Responsive Dark Mode

![App Screenshot](https://imgur.com/JU99i1G.png)

![App Screenshot](https://imgur.com/6Glas4W.png)

![App Screenshot](https://imgur.com/DMwCEV3.png)

![App Screenshot](https://imgur.com/ZloVvrB.png)

![App Screenshot](https://imgur.com/UzEzdfB.png)

![App Screenshot](https://imgur.com/iAz5xOf.png)
