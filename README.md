
## Live Page
<a href="https://starbrew.vercel.app/">Starbrew App</a>

## Starbrew ☕
A modern, responsive coffee showcase website built with Next.js, React, and Tailwind CSS.

## Features

- Responsive navigation bar
- Multiple hero sections showcasing different aspects of the coffee experience
- Dynamic card system for displaying coffee products, the Card component is a reusable UI element for displaying coffee items. It allows users to select different sizes and dynamically updates the price based on the selection.
- Mobile-friendly design
- Modern UI with Tailwind CSS styling

## Tech Stack

- Frontend Framework: Next.js (React)
- Styling: Tailwind CSS
- Backend: Node.js
- Deployment: Vercel

## Prerequisites
- Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

- Clone the repository:
```bash
git clone https://github.com/msrissaxox/starbrew.git
```
- Navigate to the project directory
```bash
cd starbrew
```
- Install Dependencies
```bash
npm install
```
## Getting Started

- Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Components

- Navbar: Main navigation component
- Hero1, Hero2, Hero3: Featured content sections
- Card: Reusable component for displaying coffee products
- CardSection: Container component for organizing cards
- Footer: Bottom section with additional information

## Data Management
- Coffee product data is managed through the coffeedata.js file, which exports an array of coffee products with properties including:
- id
- name
- picture
- description

## Deployment
- This project is deployed on Vercel. For deployment:
- Push your code to GitHub
- Connect your repository to Vercel
- Follow the deployment steps in Vercel's interface

## Contributing
- Fork the repository
- Create your feature branch (git checkout -b feature/AmazingFeature)
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## License
- This project is licensed under the MIT License - see the LICENSE file for details
