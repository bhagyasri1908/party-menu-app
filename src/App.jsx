import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { dishes } from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import SummaryPage from "./components/SummaryPage";
import "./App.css";

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("STARTER");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  const navigate = useNavigate();

  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory = dish.mealType === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVeg = vegOnly ? dish.type === "VEG" : true;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  const handleAddDish = (id) => {
    if (!selectedDishes.includes(id)) setSelectedDishes([...selectedDishes, id]);
  };

  const handleRemoveDish = (id) => {
    setSelectedDishes(selectedDishes.filter((dishId) => dishId !== id));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  const handleContinue = () => {
    navigate("/summary", { state: { selectedDishes } });
  };

  // Calculate selected counts per category
  const categoryCounts = {
    STARTER: selectedDishes.filter(id => dishes.find(d => d.id === id)?.mealType === "STARTER").length,
    "MAIN COURSE": selectedDishes.filter(id => dishes.find(d => d.id === id)?.mealType === "MAIN COURSE").length,
    DESSERT: selectedDishes.filter(id => dishes.find(d => d.id === id)?.mealType === "DESSERT").length,
    SIDES: selectedDishes.filter(id => dishes.find(d => d.id === id)?.mealType === "SIDES").length,
  };

  const totalSelected = selectedDishes.length;

  return (
    <div className="app-container">
      <h1 className="app-title">Party Menu Selection</h1>
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
        categoryCounts={categoryCounts} // Pass counts to Filters
      />
      
      <DishList
        dishes={filteredDishes}
        selectedDishes={selectedDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        onViewIngredients={handleViewIngredients}
      />
      
      {isModalOpen && currentDish && (
        <IngredientModal dish={currentDish} onClose={() => setIsModalOpen(false)} />
      )}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Total Selected Dishes: {totalSelected}</p>
        <button
          onClick={handleContinue}
          disabled={selectedDishes.length === 0}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: selectedDishes.length === 0 ? "not-allowed" : "pointer",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
