# AIRIES AI Website

A modern website for AIRIES AI, a B2B SaaS platform that provides AI-powered customer care agents for companies.

## About AIRIES AI

AIRIES AI offers intelligent, AI-powered customer care agents that can handle customer inquiries through phone calls. The system works by:

1. Providing a Twilio-powered phone number that connects to a custom-trained AI model for each company
2. The AI model understands and responds to customer inquiries in real-time
3. After each call, data is processed through Make.com webhook integration
4. Call data is filtered to provide summaries and resolution status
5. All data is stored in a user dashboard for easy access and analysis

## Business Model

AIRIES AI operates on a B2B subscription model with plans calculated based on:
- Minutes of call time
- Number of concurrent calls

## Technology Stack

This website is built with:

- Vite
- React
- TypeScript
- TailwindCSS
- React Router
- React Icons
- Framer Motion

## Features

- Responsive landing page
- Service explanation sections
- Pricing information
- User dashboard
- Call analytics

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/airies-ai-website.git
cd airies-ai-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Project Structure

- `src/`: Source files
  - `components/`: Reusable React components
  - `pages/`: Page components for routing
  - `assets/`: Static assets like images
- `public/`: Public files served directly by the server

## License

[MIT](LICENSE)
