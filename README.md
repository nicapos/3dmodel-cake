# 3D Cake

An interactive birthday cake screensaver where users can customize their own cake. Once activated, a virtual birthday cake with lit candles appears on the screen. Users can blow into their device's microphone to simulate blowing out the candles, which will then extinguish accordingly on the screen.

This project was submitted as a requirement for an elective on 3D Modeling and Animation (3DMODEL).

## Getting Started

### Prerequisites

Before you begin, make sure you have [Node.js & npm](https://nodejs.org/) installed on your system.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/nicapos/3dmodel-final.git
   ```

2. Navigate into the project directory:

   ```bash
   cd 3dmodel-final
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Development Server

To start the development server with hot-reloading, run:

```bash
npm run dev
```

This will start the Vite development server, and the project will be available at `http://localhost:5173/` by default.


## Project Structure

```
├── public/              # Public assets (HTML, images, etc.)
├── src/                 # Source files
│   ├── components/      # Reusable components
│   ├── scenes/          # Three.js scenes
│   └── main.js          # Entry point
├── .gitignore           # Git ignore file
├── package.json         # NPM package configuration
└── README.md            # Project README
```