# TheChefkart: Party Menu Selection App

A **ReactJS** web application for browsing and selecting party dishes. Users can filter dishes by category, search by name, and toggle between Veg/Non-Veg options. Selected dishes can be added or removed, and ingredient details can be viewed in a modal.

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Project Setup](#project-setup)  
5. [Project Structure](#project-structure)  
6. [Implementation Details](#implementation-details)  
7. [Styling](#styling)  
8. [Contributing](#contributing)  
9. [License](#license)  

---

## Project Overview

The goal of this assignment is to build a **Party Menu Selection App** using ReactJS with Vite. Users can:

- Browse a categorized menu (STARTER, MAIN COURSE, DESSERT, SIDES, NON-VEG).  
- Filter dishes by Veg/Non-Veg.  
- Search for dishes by name.  
- Add/remove dishes for party selection.  
- View detailed ingredients in a modal.

---

## Features

- **Category Tabs**: Filter dishes by meal type.  
- **Search Bar**: Dynamic search for dishes.  
- **Veg/Non-Veg Filter**: Toggle to show only vegetarian dishes.  
- **Dish Cards**: Display dish name, description, and image.  
- **Add/Remove Dishes**: Select or remove dishes for your party.  
- **Ingredient Modal**: View full list of ingredients for each dish.  
- **Responsive Design**: Works across devices.  

---

## Tech Stack

- **Frontend**: ReactJS (functional components, hooks)  
- **Build Tool**: Vite  
- **Styling**: CSS (Flexbox/Grid)  

---

## Project Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/party-menu-app.git
cd party-menu-app
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Open your browser at http://localhost:5173 (Vite default).

Project Structure
css
Copy code
party-menu-app/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── DishCard.jsx
│   │   ├── DishList.jsx
│   │   ├── Filters.jsx
│   │   └── IngredientModal.jsx
│   ├── data/
│   │   └── mockDishes.js
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── package.json
└── vite.config.js
Implementation Details
Components
Filters.jsx: Category tabs, search bar, and Veg/Non-Veg toggle.

DishList.jsx: Renders a list of DishCard components.

DishCard.jsx: Displays a dish with add/remove button and ingredient modal trigger.

IngredientModal.jsx: Displays a modal with ingredients and description.

State Management
selectedCategory: Tracks the active category.

searchTerm: Tracks search input.

vegOnly: Boolean to filter vegetarian dishes.

selectedDishes: Array storing IDs of selected dishes.

currentDish & isModalOpen: For ingredient modal display.

Data
mockDishes.js contains an array of dish objects with:

json
Copy code
{
  "id": 1,
  "name": "Kadhai Paneer",
  "description": "Paneer cubes in spicy onion gravy with capsicum.",
  "image": "https://placehold.co/300x200/F7D0B3/422402?text=Kadhai+Paneer",
  "mealType": "MAIN COURSE",
  "type": "VEG",
  "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onion", "quantity": "2 large" }
  ]
}
Styling
Flexbox used for layout.

Cards stacked vertically, centered, no shadow.

Simple color palette with neutral backgrounds and rounded cards.

Contributing
Fork the repository.

Create a new branch: git checkout -b feature-name.

Make your changes and commit: git commit -m "Add feature".

Push to branch: git push origin feature-name.

Create a pull request.

License
This project is MIT Licensed.


