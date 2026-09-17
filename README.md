# 🎬 MovieExplorer – Interactive Movie & Show Finder

MovieExplorer is a responsive, feature-rich web application built with **React** and **Tailwind CSS**. It allows users to browse popular TV shows and movies, search for specific titles in real-time, and view comprehensive details using an interactive modal interface powered by the **TVMaze API**.

---

## 🚀 Live Demo & Links

* **🌐 Live Deployment:** [Your Live Vercel/Netlify Link Here]
* **📂 GitHub Repository:** [Your GitHub Repository Link Here]

---

## ✨ Features & Requirements

### 🏠 Home Page & Navigation
* **Navbar:** Sticky header featuring the brand logo and navigation controls.
* **Hero Banner:** Dynamic layout with gradient backdrop, project tagline, and a direct Call-To-Action (CTA) button to jump straight into movie browsing.
* **Footer:** Clean footer displaying copyright information (`© 2026 MovieExplorer`).

### 🔍 Movie Listing & Real-Time Search
* **Dynamic Search:** Real-time search bar fetching results by title using the TVMaze Search API (`/search/shows?q=:query`).
* **Grid Layout:** Fully responsive CSS Grid/Flexbox layout optimized for desktop, tablet, and mobile displays.
* **Movie Cards:** Custom components showing movie posters, titles, release years, and average ratings.

### 🎞️ Detailed Information Modal
* Interactive overlay showing backdrop/poster artwork, title, rating, release date, genres, and rich overview descriptions.
* Dismissible via the dedicated close (`✕`) button or backdrop click.

---

## 🛠️ Tech Stack & API

| Layer | Technology |
| :--- | :--- |
| **Frontend Library** | React.js |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React |
| **API Provider** | [TVMaze API](https://www.tvmaze.com/api) |
| **Build Tool** | Vite |

---

## 📐 API Endpoints Used

* **Fetch All Shows:** `GET https://api.tvmaze.com/shows`
* **Search Shows:** `GET https://api.tvmaze.com/search/shows?q=:query`

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/movie-explorer.git](https://github.com/your-username/movie-explorer.git)
   cd movie-explorer