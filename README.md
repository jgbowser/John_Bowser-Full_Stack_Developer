# John Bowser's Personal Website

My personal website and portfolio built with modern web technologies (that are totally overkill, but I wanted to play around with them.) Visit [johnbowser.dev](https://www.johnbowser.dev) to see it in action.

## Technologies

- [SvelteKit](https://kit.svelte.dev/) - Full-stack web framework
- [Skeleton UI](https://www.skeleton.dev/) - UI design system and component library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## Prerequisites

- Node.js 20.9.0 (use [nvm](https://github.com/nvm-sh/nvm) for version management)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/johnbowser/personal_website.git
   cd personal_website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type-check the project
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint

## Project Structure

```
personal_website/
├── src/              # Source files
├── static/           # Static assets
├── .svelte-kit/      # SvelteKit build output
└── package.json      # Project configuration
```

## License

MIT
