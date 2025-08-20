# Store Stride Manage - E-commerce Management System

A modern React-based e-commerce management system built with Vite, TypeScript, and Tailwind CSS.

## Features

- 🛍️ Product Management
- 🛒 Shopping Cart
- 👤 User Authentication
- 📊 Admin Dashboard
- 💳 Payment Integration
- 📱 Responsive Design
- 🎨 Modern UI with Shadcn/ui

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Shadcn/ui
- **Backend**: Supabase
- **State Management**: React Context + React Query
- **Routing**: React Router DOM

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
npm run dev
```

3. **Build for production**
   ```bash
   npm run build
   ```

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push to GitHub**: This repository is configured with GitHub Actions for automatic deployment
2. **Enable GitHub Pages**: Go to Settings > Pages and select "GitHub Actions" as source
3. **Your site will be available at**: `https://[username].github.io/store-stride-manage-main/`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/      # React contexts (Auth, Cart)
├── hooks/         # Custom React hooks
├── integrations/  # External service integrations
├── lib/          # Utility functions
├── pages/        # Page components
└── main.tsx      # App entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - see LICENSE file for details
