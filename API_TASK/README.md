# 🎬 TMDB Movie RecyclerView Task

A motion-rich movie listing application built using **React (JavaScript)** and the **TMDB API**.  
The project implements a **custom RecyclerView-style vertical carousel**, where movies are displayed **one by one** with smooth animations, blur transitions, and interactive motion flow.

---

## 📌 Project Objective

The goal of this task is to demonstrate:
- API integration using JavaScript
- Reusable list rendering (RecyclerView concept)
- Interactive and motion-rich UI design
- Clean project structure and readability

Instead of a static list, the movie data is presented using a **custom animated carousel**, simulating the behavior of a RecyclerView with sequential item rendering.

---

## 🚀 Features

- 🎞 Fetches movie data from **TMDB Collection API**
- 🔁 RecyclerView-style **vertical carousel**
- ⬇️ Arrow-based navigation to rotate movies one by one
- 🌫 Blur & opacity effects for non-focused items
- 🧈 Smooth animations and transitions using **Framer Motion**
- 🎨 Clean, modern, and responsive UI
- ⚡ Fast build setup using **Vite**

---

## 🧠 RecyclerView Concept (Explanation)

Although RecyclerView is an Android component, its core idea is:
- Rendering list items efficiently
- Showing content sequentially
- Reusing UI elements instead of rendering all items at once

In this project:
- Only a **small subset of movies** is rendered at a time
- The **active movie** is highlighted
- Previous and next items are blurred and scaled
- Navigation rotates the list vertically with animation

This approach mimics RecyclerView behavior in a **web environment**.

---

## 🛠 Tech Stack

- **React (JavaScript)**
- **Vite**
- **Framer Motion**
- **TMDB API**
- **CSS (Custom styling)**

---

## 🔑 API Used

**TMDB Collection API**  
https://api.themoviedb.org/3/collection/{collection_id}




Movie posters are loaded using TMDB’s image CDN.

> TMDB data and images are used for educational and evaluation purposes only.

---

## 📂 Project Structure

API_TASK/
│
├── src/
│ ├── components/
│ │ ├── MovieList.jsx
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ └── index.css
│
├── public/
├── package.json
└── README.md


---

## ▶️ How to Run the Project

1. Clone the repository
```bash
git clone https://github.com/your-username/tmdb-movie-recyclerview-task.git


2. Navigate into the project folder

cd API_TASK


3. Install dependencies

npm install


4. Start the development server

npm run dev


5. Open browser and visit:

http://localhost:5173
